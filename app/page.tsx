"use client";
import Link from 'next/link'
import { ArrowRight, Leaf, Recycle, Factory, Coins } from 'lucide-react'

import { ThreeDBackground } from './components/ThreeDBackground'
import { ProductCarousel } from './components/ProductCarousel'

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-[#FDFBF7] relative overflow-hidden">
            <ThreeDBackground />
            {/* Navbar - Floating Glass Pill */}
            <div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4">
                <nav className="flex items-center gap-2 p-2 pl-6 pr-3 bg-white/70 backdrop-blur-xl border border-white/20 rounded-full shadow-xl shadow-earth-900/5">

                    {/* Logo Section */}
                    <div className="flex items-center gap-2 mr-6">
                        <div className="bg-earth-600 rounded-full p-1.5 text-white">
                            <Recycle size={18} />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-earth-900">StubbleX</span>
                    </div>

                    {/* Links - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-1 mr-2">
                        <Link href="/how-it-works" className="px-4 py-2 rounded-full text-sm font-medium text-sand-600 hover:text-earth-900 hover:bg-white/50 transition-all">How it Works</Link>
                        <Link href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-sand-600 hover:text-earth-900 hover:bg-white/50 transition-all">Impact</Link>
                        <Link href="/dashboard/buyer" className="px-4 py-2 rounded-full text-sm font-medium text-sand-600 hover:text-earth-900 hover:bg-white/50 transition-all">Marketplace</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pl-4 border-l border-sand-200">
                        <Link href="/login" className="px-5 py-2 rounded-full text-sm font-semibold text-earth-700 hover:bg-earth-50 transition-colors">Log in</Link>
                        <Link href="/register" className="px-5 py-2.5 rounded-full bg-earth-900 text-white text-sm font-semibold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Get Started
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Hero Section - Increased top padding to prevent badge overlap */}
            <section className="relative pt-40 pb-32 px-6 flex flex-col items-center text-center overflow-hidden min-h-[85vh] justify-center">

                {/* 3D Animated Hero */}
                <div className="relative perspective-1000 w-full max-w-5xl">
                    <div className="relative z-10 transform-style-3d hover:rotate-y-2 transition-transform duration-700 ease-out">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-earth-800 text-sm font-medium mb-12 shadow-sm animate-float">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Live Biomass Marketplace
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-earth-900 tracking-tighter mb-8 leading-[0.9]">
                            Convert Crop Waste<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-earth-600 relative">
                                Into Cash.
                                <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-earth-700 max-w-xl mx-auto mb-12 font-medium leading-relaxed">
                            Stop burning. Start earning. <br />
                            <span className="opacity-70">Connects farmers directly to industries.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center perspective-500">
                            <Link href="/dashboard?role=farmer" className="group relative px-8 py-4 bg-earth-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 transform-style-3d hover:rotate-x-2">
                                <span className="flex items-center gap-2">I have Waste to Sell <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                            <Link href="/dashboard?role=buyer" className="group px-8 py-4 bg-white text-earth-900 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl border border-earth-100 transition-all hover:-translate-y-1">
                                I want to Buy Biomass
                            </Link>
                        </div>
                    </div>

                    {/* Simple Geometric Background Elements for 3D Feel without heavy libraries */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-green-200/40 to-orange-100/40 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
                </div>
            </section>

            {/* Features 3D Cards */}
            <section className="py-24 px-6 bg-white perspective-1000 relative">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FDFBF7] to-white"></div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="group bg-[#FDFBF7] rounded-[2rem] p-8 transform transition-all duration-500 hover:scale-105 hover:rotate-y-6 hover:shadow-2xl cursor-default border border-earth-100/50 flex flex-col justify-between h-80">
                        <div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-earth-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Coins size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-earth-900 mb-3">Instant Valuation</h3>
                            <p className="text-earth-600 leading-relaxed font-medium">Our AI analyzes your crop waste and gives you a fair market price instantly.</p>
                        </div>
                    </div>

                    <div className="group bg-earth-900 rounded-[2rem] p-8 transform transition-all duration-500 hover:scale-110 hover:rotate-y-0 z-10 hover:shadow-2xl shadow-xl border-4 border-white cursor-default flex flex-col justify-between h-96 -mt-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                        <div>
                            <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                                <Leaf size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-3">Zero Burning</h3>
                            <p className="text-earth-200 leading-relaxed font-medium">Save the soil and the air. Every ton sold is a ton not removed by fire.</p>
                        </div>
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-green-500"></div>
                        </div>
                    </div>

                    <div className="group bg-[#FDFBF7] rounded-[2rem] p-8 transform transition-all duration-500 hover:scale-105 hover:rotate-y-minus-6 hover:shadow-2xl cursor-default border border-earth-100/50 flex flex-col justify-between h-80">
                        <div>
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-earth-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <Factory size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-earth-900 mb-3">Industry Ready</h3>
                            <p className="text-earth-600 leading-relaxed font-medium">Direct connection to bio-energy plants and paper mills needing your raw material.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="py-24 bg-earth-800 text-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-green-500 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-yellow-500 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="text-center mb-12 px-6">
                        <span className="text-earth-300 font-bold tracking-wider uppercase text-sm mb-4 block">Real Impact</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">From <span className="text-green-400">Waste</span> to <span className="text-yellow-400">Worth</span></h2>
                        <p className="text-earth-200 text-lg max-w-2xl mx-auto">
                            See how stubble is transformed into valuable eco-friendly products, creating a circular economy that benefits everyone.
                        </p>
                    </div>

                    {/* Carousel */}
                    <ProductCarousel />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-earth-900 text-white py-12 px-6 border-t border-earth-800 z-10 relative">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                            <div className="bg-green-500 p-1.5 rounded-lg text-white">
                                <Recycle size={20} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">StubbleX</span>
                        </div>
                        <p className="text-earth-300 text-sm max-w-xs">
                            Turning agricultural waste into economic worth. Join the revolution for a cleaner, wealthier India.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-earth-200">
                        <Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                        <Link href="/about" className="hover:text-white transition-colors">What We Do</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                    </div>

                    <div className="text-earth-400 text-xs text-center md:text-right">
                        &copy; {new Date().getFullYear()} StubbleX Platform.<br />All rights reserved.
                    </div>
                </div>
            </footer>
        </main >
    )
}
