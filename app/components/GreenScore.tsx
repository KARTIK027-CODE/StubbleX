import React from 'react';
import { Leaf, Award, TrendingUp, ShieldCheck } from 'lucide-react';

interface GreenScoreProps {
    score?: number;
    co2Saved?: number; // in tons
    wasteSold?: number; // in tons
}

export default function GreenScore({ score = 750, co2Saved = 12.5, wasteSold = 18 }: GreenScoreProps) {
    // Determine badge based on score
    let badge = { name: "Seedling", color: "text-green-500", bg: "bg-green-100", icon: Leaf };
    if (score > 800) badge = { name: "Eco-Warrior", color: "text-emerald-600", bg: "bg-emerald-100", icon: ShieldCheck };
    else if (score > 500) badge = { name: "Guardian", color: "text-teal-600", bg: "bg-teal-100", icon: Award };

    // Calculate progress circle stroke
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progress = (score / 1000) * circumference;
    const dashoffset = circumference - progress;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-10 -mt-10 opacity-50"></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
                <div>
                    <h3 className="text-xl font-bold text-earth-900 flex items-center gap-2">
                        <Leaf className="text-green-600" size={24} />
                        Green Score
                    </h3>
                    <p className="text-earth-500 text-sm">Your sustainability impact level</p>
                </div>
                <div className={`px-4 py-1.5 rounded-full ${badge.bg} ${badge.color} font-semibold text-sm flex items-center gap-2`}>
                    <badge.icon size={16} />
                    {badge.name}
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Score Circle */}
                <div className="relative">
                    <svg width="140" height="140" className="transform -rotate-90">
                        <circle
                            cx="70" cy="70" r={radius}
                            stroke="currentColor" strokeWidth="12"
                            fill="transparent"
                            className="text-earth-100"
                        />
                        <circle
                            cx="70" cy="70" r={radius}
                            stroke="currentColor" strokeWidth="12"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={dashoffset}
                            strokeLinecap="round"
                            className="text-green-500 transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-3xl font-bold text-earth-900">{score}</div>
                        <div className="text-xs text-earth-400 font-medium">/ 1000</div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="flex-1 w-full grid grid-cols-2 gap-4">
                    <div className="bg-sand-50 p-4 rounded-xl border border-sand-100">
                        <div className="text-earth-500 text-xs mb-1 font-medium uppercase tracking-wide">CO2 Saved</div>
                        <div className="text-xl font-bold text-earth-800 flex items-end gap-1">
                            {co2Saved} <span className="text-sm font-normal text-earth-600 mb-1">Tons</span>
                        </div>
                        <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <TrendingUp size={12} /> +2.4 this month
                        </div>
                    </div>

                    <div className="bg-sand-50 p-4 rounded-xl border border-sand-100">
                        <div className="text-earth-500 text-xs mb-1 font-medium uppercase tracking-wide">Waste Recycled</div>
                        <div className="text-xl font-bold text-earth-800 flex items-end gap-1">
                            {wasteSold} <span className="text-sm font-normal text-earth-600 mb-1">Tons</span>
                        </div>
                        <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <TrendingUp size={12} /> Top 10% in area
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-earth-100">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-earth-600">Next Level: <span className="font-semibold text-earth-800">Eco-Warrior</span></span>
                    <span className="text-earth-400">50 pts to go</span>
                </div>
                <div className="w-full bg-earth-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
            </div>
        </div>
    );
}
