"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
    {
        title: "Clean Energy",
        desc: "High-calorific biofuel pellets replace coal in industrial boilers, reducing emissions by up to 80%.",
        img: "/images/products/biofuel.png"
    },
    {
        title: "Sustainable Packaging",
        desc: "Biodegradable plates and containers made from wheat straw. Sturdy, microwave-safe, and 100% compostable.",
        img: "/images/products/packaging.png"
    },
    {
        title: "Green Textiles & Paper",
        desc: "Pulp for unbleached paper and natural textile fibers, saving millions of trees from being cut down.",
        img: "/images/products/paper.png"
    },
    {
        title: "Bio-Bricks",
        desc: "Carbon-neutral construction blocks made from compressed crop residues. Durable and insulating.",
        img: "/images/products/bio_bricks.png"
    },
    {
        title: "Nutrient Fodder",
        desc: "Enriched cattle feed pellets processed from stubble, supporting livestock health and reducing waste.",
        img: "/images/products/fodder.png"
    },
    {
        title: "Organic Gold",
        desc: "Premium organic compost returned to the soil, completing the nutrient cycle for future crops.",
        img: "/images/products/compost.png"
    },
    {
        title: "Mushroom Packaging",
        desc: "Mycelium-grown packaging that serves as a perfect, compostable alternative to styrofoam.",
        img: "/images/products/mushroom.png"
    }
];

export const ProductCarousel = () => {
    // Duplicate the products to create a seamless loop
    const carouselItems = [...products, ...products];

    return (
        <div className="w-full relative py-8">
            {/* Gradient Masks for fading effect at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-earth-800 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-earth-800 to-transparent pointer-events-none"></div>

            <div className="overflow-hidden flex">
                <motion.div
                    className="flex gap-8 px-8"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear"
                        }
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-earth-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 delay-75">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
