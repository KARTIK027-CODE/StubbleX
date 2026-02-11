"use client";
import React from "react";
import Link from 'next/link';
import { Recycle } from 'lucide-react';

export const Footer = () => {
    return (
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
    );
};
