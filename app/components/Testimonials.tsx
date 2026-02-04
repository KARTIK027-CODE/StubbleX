"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Play, TrendingUp, MapPin, Leaf } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Punjab, India",
        earnings: "₹45,000",
        role: "Wheat Farmer (15 Acres)",
        image: "/images/rajesh.png",
        quote: "I used to pay fines for burning stubble. Now, StubbleX pays me for it. Last season, I cleared my debt just by selling waste I used to burn.",
        impact: "Stopped 12 tons of CO2"
    },
    {
        name: "Sunita Devi",
        location: "Haryana, India",
        earnings: "₹28,000",
        role: "Paddy Farmer (8 Acres)",
        image: "/images/sunita.png",
        quote: "The pickup was arranged within 24 hours. The money was credited to my bank account instantly. It's safe, legal, and profitable.",
        impact: "Stopped 8 tons of CO2"
    },
    {
        name: "Vikram Singh",
        location: "Uttar Pradesh",
        earnings: "₹1.2 Lakh",
        role: "Co-operative Head",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "We aggregated stubble from 20 small farmers. Selling in bulk to the bio-energy plant via StubbleX gave us the best market rate.",
        impact: "Stopped 40 tons of CO2"
    },
    {
        name: "Amandeep Singh",
        location: "Punjab, India",
        earnings: "₹52,000",
        role: "Mixed Crop Farmer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "Previously, managing waste was a headache. Now it's a revenue stream. The app is so easy to use even for my father.",
        impact: "Stopped 15 tons of CO2"
    },
    {
        name: "Meera Reddy",
        location: "Telangana, India",
        earnings: "₹35,000",
        role: "Organic Farmer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200",
        quote: "StubbleX connected me directly to paper mills. Better prices, no middlemen, and I feel good about helping the environment.",
        impact: "Stopped 10 tons of CO2"
    }
];

export const Testimonials = () => {
    // Duplicate to ensure smooth infinite scroll
    const scrollingTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[120px]"></div>
                <div className="absolute right-[-10%] bottom-[10%] w-[500px] h-[500px] bg-orange-100/60 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/80 text-green-800 text-xs font-bold uppercase tracking-wider mb-4 border border-green-200"
                    >
                        <TrendingUp size={14} /> Real Income
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-earth-900 mb-6"
                    >
                        Harvesting <span className="text-green-600 relative inline-block">
                            Wealth
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span> From Waste.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-earth-600 text-lg max-w-2xl mx-auto"
                    >
                        Join over 5,000+ farmers turning a storage headache into a steady new income stream.
                    </motion.p>
                </div>

                {/* Scrolling Container */}
                <div className="flex overflow-hidden relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#FDFBF7] to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#FDFBF7] to-transparent pointer-events-none"></div>

                    <motion.div
                        className="flex gap-8 px-8"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 50,
                                ease: "linear"
                            }
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {scrollingTestimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-earth-900/5 border border-earth-100 flex flex-col h-full relative group shrink-0 w-[400px]"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-earth-200 group-hover:text-green-200 transition-colors">
                                    <Quote size={60} fill="currentColor" strokeWidth={0} />
                                </div>

                                {/* Profile Header */}
                                <div className="flex items-center gap-4 mb-6 z-10">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                            <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                                            <div className="bg-green-500 w-4 h-4 rounded-full flex items-center justify-center">
                                                <Play size={8} fill="white" className="text-white ml-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-earth-900 leading-tight">{t.name}</h3>
                                        <div className="flex items-center gap-1 text-earth-500 text-xs mt-1">
                                            <MapPin size={12} /> {t.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Earnings Badge */}
                                <div className="mb-6 flex items-start">
                                    <div className="bg-green-50 rounded-2xl p-4 border border-green-100 w-full transition-colors duration-300">
                                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1 block">Season Earnings</span>
                                        <div className="text-3xl font-black text-green-700 tracking-tight">{t.earnings}</div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="text-earth-600 italic leading-relaxed mb-6 font-medium flex-grow">
                                    "{t.quote}"
                                </p>

                                {/* Divider */}
                                <div className="h-px w-full bg-earth-100 mb-4"></div>

                                {/* Footer Stats */}
                                <div className="flex justify-between items-center text-xs font-medium">
                                    <span className="text-earth-400">{t.role}</span>
                                    <span className="text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                                        <Leaf size={12} /> {t.impact}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};
