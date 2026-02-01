import http.server
import socketserver
import json
import random

import os
PORT = int(os.environ.get("PORT", 8081))
OTP_STORE = {}

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.socket.bind(self.server_address)

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        data = {}
        try:
            if content_length > 0 and 'application/json' in self.headers.get('Content-Type', ''):
                data = json.loads(post_data.decode('utf-8'))
        except Exception as e:
            print(f"Error parsing body: {e}")
            pass
        
        response = {}
        
        if self.path == '/api/send-otp':
            phone = data.get('phone_number')
            otp = str(random.randint(1000, 9999))
            if phone:
                OTP_STORE[phone] = otp
                print(f"Generated OTP for {phone}: {otp}")
                response = {"status": "success", "message": "OTP sent successfully", "otp": otp}
            else:
                 self.send_response(400)
                 self.end_headers()
                 return
            
        elif self.path == '/api/verify-otp':
            phone = data.get('phone_number')
            user_otp = data.get('otp')
            
            if phone in OTP_STORE and OTP_STORE[phone] == user_otp:
                response = {"status": "success", "message": "OTP verified", "token": "mock-jwt-token"}
            else:
                self.send_response(400)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": "Invalid OTP"}).encode('utf-8'))
                return

        elif self.path == '/api/predict-price':
            # Mock price prediction
            qty = data.get('quantity', 0)
            waste_type = data.get('waste_type', 'unknown')
            base_price = 2000 if 'rice' in waste_type else 3000
            total = base_price * qty
            response = {"estimated_price": base_price, "total_value": total, "currency": "INR"}

        elif self.path == '/api/classify-waste':
            # Mock classification - return static data for any image
            response = {
                "predicted_class": "rice_straw",
                "display_name": "Rice Straw",
                "confidence": 0.98,
                "price_range": {"min_per_ton": 2200, "max_per_ton": 2800, "currency": "INR"},
                "environmental_benefits": {
                    "co2_reduction_per_ton": 1500,
                    "soil_nitrogen_retained_kg": 12,
                    "water_savings_liters": 5000
                },
                "industrial_uses": [
                    {"industry": "Bio-Energy", "application": "Ethanol Production", "processing": "Fermentation", "market_demand": "Very High"},
                    {"industry": "Paper & Pulp", "application": "Paper Manufacturing", "processing": "Pulping", "market_demand": "High"}
                ]
            }
            
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "healthy"}).encode('utf-8'))

print(f"Starting simple server on port {PORT}")
with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
