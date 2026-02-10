'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GreetingForm } from '@/components/greeting-form';
import { GreetingCard } from '@/components/greeting-card';
import { RAMADAN_CONTENT, getRandomContent, ContentItem } from '@/lib/content';
import { CrescentMoon, MosqueSilhouette, FloatingStar } from '@/components/decorations';
import { Fanoos } from '@/components/fanoos';
import { StarField } from '@/components/star-field';

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [currentContent, setCurrentContent] = useState<ContentItem>(RAMADAN_CONTENT[0]);

  const handleFormSubmit = (name: string) => {
    setUserName(name);
    setCurrentContent(getRandomContent());
  };

  const handleGenerateAnother = () => {
    // Generate new content different from current if possible
    setCurrentContent(getRandomContent(currentContent.id));
  };

  const handleReset = () => {
    setUserName(null);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-background to-background overflow-hidden relative selection:bg-primary/30">

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">


        {/* Stars */}
        <StarField />

        {/* Large Decorative Fanoos (Top Right) */}
        <div className="absolute -top-20 -right-10 md:right-10 opacity-30 rotate-12">
          <Fanoos className="w-40 md:w-60" delay={0.5} scale={1.2} />
        </div>

        {/* Large Decorative Fanoos (Top Left - smaller) */}
        <div className="absolute -top-10 -left-10 md:left-20 opacity-20 -rotate-12">
          <Fanoos className="w-24 md:w-40" delay={1.5} scale={0.8} />
        </div>

        {/* Crescent Moon */}
        <motion.div
          className="absolute top-20 right-[20%] opacity-10 md:opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CrescentMoon className="w-40 h-40 md:w-60 md:h-60" />
        </motion.div>

        {/* Mosque Silhouette (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 opacity-10">
          <MosqueSilhouette />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">

        <AnimatePresence mode="wait">
          {!userName ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-12"
            >
              {/* Header */}
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  className="relative inline-block"
                >
                  <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-yellow-600 drop-shadow-sm pb-2">
                    رمضان كريم
                  </h1>
                  <motion.div
                    className="absolute -top-6 -right-6 text-4xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
                >
                  أرسل لك محمد طه تهنئة خاصة بمناسبة شهر رمضان
                </motion.p>
              </div>

              {/* Form */}
              <div className="w-full">
                <GreetingForm onSubmit={handleFormSubmit} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="card"
              className="w-full flex flex-col items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GreetingCard
                name={userName}
                content={currentContent}
                onGenerateAnother={handleGenerateAnother}
              />

              <button
                onClick={handleReset}
                className="text-muted-foreground hover:text-primary transition-colors text-sm underline underline-offset-4"
              >
                العودة للرئيسية
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 text-center text-xs md:text-sm text-muted-foreground/50"
        >
          <p>© 2024 جميع الحقوق محفوظة</p>
        </motion.footer>
      </div>
    </div>
  );
}
