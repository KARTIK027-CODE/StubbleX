"use client";
import Link from 'next/link';
import { ArrowLeft, Upload, Search, Truck, CheckCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] flex flex-col">
            <nav className="p-6 sticky top-0 bg-[#FDFBF7]/80 backdrop-blur z-50">
                <Link href="/" className="inline-flex items-center gap-2 text-earth-600 hover:text-earth-900 font-medium">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </nav>

            <div className="max-w-6xl mx-auto px-6 py-12 w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-earth-900 mb-16 text-center">How StubbleX Works</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Farmer Flow */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-700 mb-8 flex items-center gap-3">
                            <span className="bg-green-100 px-3 py-1 rounded-lg text-sm uppercase tracking-wider">For Farmers</span>
                        </h2>
                        <div className="space-y-12 border-l-2 border-green-200 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-[#FDFBF7]"></span>
                                <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center gap-2"><Upload size={20} /> Upload Listing</h3>
                                <p className="text-earth-600">Take a photo of your stubble. Our AI automatically identifies the type (Rice/Wheat) and estimates quality.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-[#FDFBF7]"></span>
                                <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center gap-2"><CheckCircle size={20} /> Get Instant Price</h3>
                                <p className="text-earth-600">Receive a fair market price globally calculated based on demand, quantity, and moisture content.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-[#FDFBF7]"></span>
                                <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center gap-2"><Truck size={20} /> Schedule Pickup</h3>
                                <p className="text-earth-600">Confirm the sale. A partner logistics truck arrives at your farm to collect the waste. You get paid instantly.</p>
                            </div>
                        </div>
                    </div>

                    {/* Buyer Flow */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-700 mb-8 flex items-center gap-3">
                            <span className="bg-orange-100 px-3 py-1 rounded-lg text-sm uppercase tracking-wider">For Buyers</span>
                        </h2>
                        <div className="space-y-12 border-l-2 border-orange-200 pl-8 relative">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#FDFBF7]"></span>
                                <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center gap-2"><Search size={20} /> Browse Marketplace</h3>
                                <p className="text-earth-600">Filter available biomass by type, location, volume, and moisture content. View real images.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#FDFBF7]"></span>
                                <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center gap-2"><Truck size={20} /> Secure Supply</h3>
                                <p className="text-earth-600">Place bulk orders. We aggregate small farm holdings into large, industry-ready shipments.</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#FDFBF7]"></span>
                                <h3 className="text-xl font-bold text-earth-900 mb-2 flex items-center gap-2"><CheckCircle size={20} /> Track Impact</h3>
                                <p className="text-earth-600">Monitor your carbon offset and secured biomass stats directly from your corporate dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
