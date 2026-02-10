'use client';

import { motion } from 'framer-motion';

interface FanoosProps {
    className?: string;
    delay?: number;
    scale?: number;
}

export function Fanoos({ className = '', delay = 0, scale = 1 }: FanoosProps) {
    return (
        <motion.div
            className={`relative inline-block ${className}`}
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: delay,
            }}
            style={{ transformOrigin: 'top center', scale }}
        >
            {/* Rope */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent to-primary/60 -mt-20" />

            {/* Lantern Body */}
            <svg
                width="60"
                height="100"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg"
            >
                {/* Top Ring */}
                <circle cx="30" cy="5" r="4" stroke="currentColor" strokeWidth="2" className="text-primary" />

                {/* Top Cap */}
                <path d="M20 10 H40 L50 25 H10 L20 10 Z" fill="currentColor" className="text-primary/80" />

                {/* Main Glass Housing */}
                <path d="M10 25 H50 L55 65 H5 L10 25 Z" fill="url(#glassGradient)" stroke="currentColor" strokeWidth="1" className="text-primary" />

                {/* Bottom Base */}
                <path d="M15 65 H45 L40 75 H20 L15 65 Z" fill="currentColor" className="text-primary/80" />
                <path d="M25 75 H35 L33 80 H27 L25 75 Z" fill="currentColor" className="text-primary" />

                {/* Decorative Patterns on Glass */}
                <path d="M30 25 V65" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" />
                <path d="M15 45 H45" stroke="currentColor" strokeWidth="0.5" className="text-primary/50" />

                {/* Inner Light/Glow */}
                <defs>
                    <radialGradient id="glassGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(30 45) rotate(90) scale(40 25)">
                        <stop stopColor="#FCD34D" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#F59E0B" stopOpacity="0.1" />
                    </radialGradient>
                </defs>
            </svg>

            {/* Glow Effect */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-400 rounded-full blur-xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
        </motion.div>
    );
}
