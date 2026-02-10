'use client';

import { motion } from 'framer-motion';

export function CrescentMoon({ className = '' }: { className?: string }) {
    return (
        <motion.svg
            viewBox="0 0 100 100"
            className={`w-32 h-32 ${className}`}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <path
                d="M50 10 C 50 10, 20 25, 20 60 C 20 95, 60 90, 60 90 C 60 90, 40 85, 40 60 C 40 35, 50 10, 50 10 Z"
                fill="currentColor"
                className="text-primary drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
            />
        </motion.svg>
    );
}

export function MosqueSilhouette({ className = '' }: { className?: string }) {
    return (
        <div className={`w-full h-full overflow-hidden ${className}`}>
            <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full text-primary/10">
                <path
                    d="M0,300 L0,250 
             L50,250 L50,150 L100,100 L150,150 L150,250 
             L200,250 L200,180 L250,130 L300,180 L300,250
             L350,250 L350,200 A50,50 0 0,1 450,200 L450,250
             L500,250 L500,120 L550,70 L600,120 L600,250
             L650,250 L650,180 L700,130 L750,180 L750,250
             L800,250 L800,150 L850,100 L900,150 L900,250
             L950,250 L1000,250 L1000,300 Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}

export function FloatingStar({ delay = 0 }: { delay?: number }) {
    return (
        <motion.div
            className="absolute text-primary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
                y: [0, -20, 0]
            }}
            transition={{
                duration: 3,
                delay: delay,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
        >
            ✨
        </motion.div>
    );
}
