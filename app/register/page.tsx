"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Leaf, Factory, ArrowRight, User } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();
    const [activeRole, setActiveRole] = useState<'farmer' | 'buyer'>('farmer');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/login');
    };

    return (
        <div className="min-h-screen flex bg-earth-50">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-earth-800 text-white p-12 flex-col justify-between relative overflow-hidden">
                <div className="z-10">
                    <Link href="/" className="text-2xl font-bold tracking-tight">StubbleX</Link>
                </div>

                <div className="z-10 max-w-md">
                    <h2 className="text-5xl font-bold mb-6">Start your journey.</h2>
                    <p className="text-earth-200 text-xl leading-relaxed">
                        Join thousands of farmers and companies building a sustainable future together.
                    </p>
                </div>

                <div className="z-10 flex gap-4 text-sm text-earth-300">
                    <span>&copy; 2026 StubbleX</span>
                </div>

                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-earth-700/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-earth-100">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-earth-900 mb-2">Create Account</h1>
                        <p className="text-earth-600">Register as a new member</p>
                    </div>

                    <div className="flex bg-earth-50 p-1 rounded-xl mb-8">
                        <button
                            onClick={() => setActiveRole('farmer')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${activeRole === 'farmer' ? 'bg-white text-earth-800 shadow-sm' : 'text-earth-500 hover:text-earth-700'}`}
                        >
                            <Leaf size={18} /> Farmer
                        </button>
                        <button
                            onClick={() => setActiveRole('buyer')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${activeRole === 'buyer' ? 'bg-white text-earth-800 shadow-sm' : 'text-earth-500 hover:text-earth-700'}`}
                        >
                            <Factory size={18} /> Buyer
                        </button>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-earth-700 mb-1">First Name</label>
                                <input type="text" className="w-full p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-earth-700 mb-1">Last Name</label>
                                <input type="text" className="w-full p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Phone Number</label>
                            <input type="tel" placeholder="+91" className="w-full p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-earth-700 mb-1">Location (Pincode)</label>
                            <input type="text" placeholder="140001" className="w-full p-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-earth-500 outline-none" required />
                        </div>

                        <button type="submit" className="w-full py-3 bg-earth-800 text-white rounded-xl font-bold hover:bg-earth-900 transition-colors flex items-center justify-center gap-2 group mt-4">
                            Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-earth-600">
                        Already have an account? <Link href="/login" className="font-semibold text-earth-800 hover:underline">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
