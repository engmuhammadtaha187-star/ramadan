'use client';

import { motion } from 'framer-motion';
import { Fanoos } from './fanoos';
import { ContentItem } from '@/lib/content';

interface GreetingCardProps {
  name: string;
  content: ContentItem;
  onGenerateAnother: () => void;
}

export function GreetingCard({ name, content, onGenerateAnother }: GreetingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className="relative">
        {/* Glow behind the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-900/20 rounded-[2rem] blur-3xl transform scale-105" />

        {/* Main card container */}
        <div className="relative bg-card/95 backdrop-blur-xl border border-primary/20 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">

          {/* Decorative Corner Patterns */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[url('/pattern.svg')] opacity-5 rotate-180 pointer-events-none" />

          {/* Hanging Fanoos Decorations */}
          <div className="absolute -top-12 right-12 z-20">
            <Fanoos className="w-16 md:w-24" delay={0} />
          </div>
          <div className="absolute -top-8 left-12 z-20">
            <Fanoos className="w-12 md:w-16" delay={1} scale={0.8} />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-8 mt-4">

            {/* Greeting Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-primary font-bold text-3xl md:text-5xl tracking-wide leading-relaxed">
                رمضان مبارك يا <span className="text-foreground">{name}</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />

              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                {content.category === 'quote' ? 'من نفحات رمضان' : content.category === 'duaa' ? 'دعاء لك' : 'تهنئة خاصة لك'}
              </p>
            </motion.div>

            {/* Main Message Body */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="min-h-[120px] flex flex-col justify-center items-center"
            >
              <p className={`text-xl md:text-3xl leading-relaxed text-foreground font-medium ${content.category === 'quote' ? 'font-serif italic' : ''}`}>
                &quot;{content.text}&quot;
              </p>

              {content.author && (
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                  — {content.author}
                </p>
              )}
            </motion.div>


            {/* Footer / Signature */}
            <div className="pt-8 w-full border-t border-border/50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>من:</span>
                  <span className="font-bold text-primary">محمد طه</span>
                  <span>🤍</span>
                </div>

                <button
                  onClick={onGenerateAnother}
                  className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/25 text-sm md:text-base"
                >
                  رسالة أخرى ✨
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
