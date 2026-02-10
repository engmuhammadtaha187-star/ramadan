'use client';

import { useEffect, useState } from 'react';
import { FloatingStar } from './decorations';

export function StarField() {
    const [stars, setStars] = useState<{ top: string; left: string; delay: number }[]>([]);

    useEffect(() => {
        // Generate star positions only on the client
        const newStars = Array.from({ length: 6 }).map((_, i) => ({
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 90}%`,
            delay: i * 0.5,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 opacity-20">
            {stars.map((star, i) => (
                <div
                    key={`star-${i}`}
                    className="absolute"
                    style={{ top: star.top, left: star.left }}
                >
                    <FloatingStar delay={star.delay} />
                </div>
            ))}
        </div>
    );
}
