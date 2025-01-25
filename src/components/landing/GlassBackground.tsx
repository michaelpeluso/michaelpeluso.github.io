import React, { FC, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const GlassBackground: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
            {/* Organic morphing shapes */}
            {Array(6)
                .fill(0)
                .map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute blur-3xl"
                        style={{
                            width: `${Math.random() * 500 + 250}px`,
                            height: `${Math.random() * 500 + 250}px`,
                            top: `${Math.random() * 80}vh`,
                            left: `${Math.random() * 80}vw`,
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent)",
                            zIndex: 0,
                        }}
                        animate={{
                            scale: [1, Math.random() * 1.5 + 0.8, 1],
                            borderRadius: ["20% 50% 70% 50%", "50% 70% 20% 70%", "30% 50% 70% 20%"],
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 5, // Between 5-15 seconds
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">{children}</div>
        </div>
    );
};

export default GlassBackground;
