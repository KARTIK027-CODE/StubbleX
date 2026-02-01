"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ThreeDBackground = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by only rendering after mount
    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-[#FDFBF7] opacity-90"></div>

            <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                {/* Ring 1 - Large horizontal rotation - More visible Earth tone */}
                <motion.div
                    className="absolute w-[800px] h-[800px] border border-earth-400/40 rounded-full"
                    style={{ rotateX: 70 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* Ring 2 - Vertical rotation - More visible Green tone */}
                <motion.div
                    className="absolute w-[600px] h-[600px] border border-green-600/30 rounded-full"
                    style={{ rotateY: 70 }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />

                {/* Ring 3 - Dashed diagonal - Subtle detail */}
                <motion.div
                    className="absolute w-[700px] h-[700px] border-2 border-dashed border-earth-600/20 rounded-full"
                    style={{ rotateX: 45, rotateY: 45 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Particles (Biomass) - Darker Green for visibility */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-green-700/40 blur-[1px]"
                        initial={{
                            x: Math.random() * 600 - 300,
                            y: Math.random() * 600 - 300,
                            z: Math.random() * 200 - 100
                        }}
                        animate={{
                            y: [0, -60, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: 7 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlay to fade edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-[#FDFBF7]"></div>
        </div>
    );
};
