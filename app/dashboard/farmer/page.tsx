"use client";
import React, { useState, useEffect } from 'react';
import { Upload, DollarSign, MapPin, Leaf, CheckCircle, Sparkles, X } from 'lucide-react';
import GreenScore from '@/app/components/GreenScore';

export default function FarmerDashboard() {
    const [wasteType, setWasteType] = useState('rice_straw');
    const [quantity, setQuantity] = useState('');
    const [prediction, setPrediction] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // AI Classification states
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [classifying, setClassifying] = useState(false);
    const [classificationResult, setClassificationResult] = useState<any>(null);

    const getPrediction = async (qty: string, type: string) => {
        if (!qty) return;
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/predict-price`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    waste_type: type,
                    quantity: parseFloat(qty),
                    location_pincode: "140001"
                })
            });
            const data = await res.json();
            setPrediction(data);
        } catch (e) {
            console.error("AI Backend offline");
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const classifyWaste = async () => {
        if (!uploadedImage) return;

        setClassifying(true);
        try {
            const formData = new FormData();
            formData.append('file', uploadedImage);

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/classify-waste`, {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            setClassificationResult(data);

            // Auto-fill the waste type based on AI classification
            setWasteType(data.predicted_class);

        } catch (error) {
            console.error('Classification error:', error);
            alert('Failed to classify waste. Please try again.');
        } finally {
            setClassifying(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (quantity) getPrediction(quantity, wasteType);
        }, 500);
        return () => clearTimeout(timer);
    }, [quantity, wasteType]);

    const displayPrice = prediction ? prediction.total_value.toLocaleString() : '0';

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-earth-900">Farmer Dashboard</h1>
                <p className="text-earth-600">Track your earnings and list new harvest waste.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-earth-100 flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-700 rounded-full">
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-earth-500">Total Earnings</div>
                        <div className="text-2xl font-bold text-earth-900">₹45,200</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-earth-100 flex items-center gap-4">
                    <div className="p-3 bg-orange-100 text-orange-700 rounded-full">
                        <Leaf size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-earth-500">Waste Sold</div>
                        <div className="text-2xl font-bold text-earth-900">12 Tons</div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-earth-100 flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-full">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-earth-500">Orders Completed</div>
                        <div className="text-2xl font-bold text-earth-900">8</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders (New) */}
                <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-earth-100 mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-earth-800">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-sm text-earth-500 border-b border-earth-100">
                                <tr>
                                    <th className="pb-3 pl-4">Order ID</th>
                                    <th className="pb-3">Date</th>
                                    <th className="pb-3">Item</th>
                                    <th className="pb-3">Qty</th>
                                    <th className="pb-3">Amount</th>
                                    <th className="pb-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-earth-800 text-sm">
                                <tr className="border-b border-earth-50 hover:bg-earth-50/50 transition-colors">
                                    <td className="py-3 pl-4 font-mono text-earth-600">#ORD-001</td>
                                    <td className="py-3">Jan 24, 2026</td>
                                    <td className="py-3">Rice Straw</td>
                                    <td className="py-3">5 Tons</td>
                                    <td className="py-3 font-semibold">₹18,000</td>
                                    <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Paid</span></td>
                                </tr>
                                <tr className="hover:bg-earth-50/50 transition-colors">
                                    <td className="py-3 pl-4 font-mono text-earth-600">#ORD-002</td>
                                    <td className="py-3">Jan 20, 2026</td>
                                    <td className="py-3">Wheat Stubble</td>
                                    <td className="py-3">3 Tons</td>
                                    <td className="py-3 font-semibold">₹12,500</td>
                                    <td className="py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Picked Up</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-earth-900 mb-6">Create New Listing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Form Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-earth-100">
                    <h2 className="text-xl font-semibold mb-4 text-earth-800 flex items-center gap-2">
                        <Upload size={20} /> New Listing
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Waste Type</label>
                            <select
                                value={wasteType}
                                onChange={(e) => setWasteType(e.target.value)}
                                className="w-full p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 bg-earth-50"
                            >
                                <option value="rice_straw">Rice Straw</option>
                                <option value="wheat_stubble">Wheat Stubble</option>
                                <option value="sugarcane_trash">Sugarcane Trash</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Quantity (Tons)</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="e.g. 5"
                                className="w-full p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Farm Location</label>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Enter Pincode" className="w-full p-3 rounded-lg border border-earth-200" />
                                <button className="p-3 bg-earth-100 text-earth-700 rounded-lg hover:bg-earth-200">
                                    <MapPin size={20} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Upload Photo & AI Classify</label>
                            <div className="border-2 border-dashed border-earth-200 rounded-lg p-6 text-center hover:bg-earth-50 transition-colors">
                                {!imagePreview ? (
                                    <>
                                        <input
                                            type="file"
                                            className="hidden"
                                            id="waste-photo"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                        />
                                        <label htmlFor="waste-photo" className="cursor-pointer flex flex-col items-center gap-2">
                                            <div className="p-3 bg-earth-100 rounded-full text-earth-600">
                                                <Upload size={24} />
                                            </div>
                                            <span className="text-sm text-earth-600 font-medium">Click to upload photo</span>
                                            <span className="text-xs text-earth-400">JPG, PNG up to 10MB</span>
                                        </label>
                                    </>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="relative">
                                            <img
                                                src={imagePreview}
                                                alt="Uploaded waste"
                                                className="w-full h-48 object-cover rounded-lg"
                                            />
                                            <button
                                                onClick={() => {
                                                    setUploadedImage(null);
                                                    setImagePreview(null);
                                                    setClassificationResult(null);
                                                }}
                                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>

                                        {!classificationResult ? (
                                            <button
                                                onClick={classifyWaste}
                                                disabled={classifying}
                                                className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                            >
                                                {classifying ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                        Classifying...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Sparkles size={18} />
                                                        AI Classify Waste
                                                    </>
                                                )}
                                            </button>
                                        ) : (
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                                <div className="flex items-center gap-2 text-green-700 mb-2">
                                                    <CheckCircle size={18} />
                                                    <span className="font-semibold">AI Classification Complete!</span>
                                                </div>
                                                <div className="text-sm text-green-900">
                                                    <p><strong>Detected:</strong> {classificationResult.display_name}</p>
                                                    <p><strong>Confidence:</strong> {(classificationResult.confidence * 100).toFixed(1)}%</p>
                                                </div>
                                                <button
                                                    onClick={classifyWaste}
                                                    className="mt-2 text-xs text-green-700 hover:text-green-900 underline"
                                                >
                                                    Re-classify
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="w-full py-3 bg-earth-600 text-white rounded-xl font-semibold hover:bg-earth-700 transition-colors shadow-lg shadow-earth-600/20">
                                List for Sale
                            </button>
                        </div>
                    </div>
                </div>

                {/* AI Insight Section */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-earth-600 to-earth-800 p-6 rounded-2xl text-white shadow-xl">
                        <div className="flex items-center gap-2 mb-2 opacity-90">
                            <DollarSign size={18} />
                            <span className="text-sm font-medium uppercase tracking-wider">AI Price Prediction</span>
                        </div>
                        <div className="text-4xl font-bold mb-1">₹{displayPrice}</div>
                        <div className="text-sm text-earth-100">
                            {loading ? "Analyzing market..." : "Estimated Market Value based on AI analysis."}
                        </div>
                    </div>

                    <GreenScore score={780} co2Saved={18.5} wasteSold={25} />
                </div>
            </div>
        </div>
    );
}
