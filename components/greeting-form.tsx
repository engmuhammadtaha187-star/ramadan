'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GreetingFormProps {
  onSubmit: (name: string) => void;
}

export function GreetingForm({ onSubmit }: GreetingFormProps) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        onSubmit(name.trim());
        setIsLoading(false);
      }, 500); // Slightly longer delay for effect
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border shadow-xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="space-y-4 text-center">
            <label htmlFor="name" className="block text-xl font-bold text-foreground">
              استلم تهنئتك من محمد طه
            </label>
            <p className="text-sm text-muted-foreground">أدخل اسمك لترى بطاقة التهنئة الخاصة بك</p>
          </div>

          <div className="relative group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اكتب الاسم هنا..."
              className="w-full px-6 py-4 rounded-2xl border-2 border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-center text-lg font-medium"
              autoFocus
              autoComplete="off"
            />
            {/* Focus glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
          </div>

          <motion.button
            type="submit"
            disabled={!name.trim() || isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3",
              !name.trim() || isLoading
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-gradient-to-r from-primary to-orange-400 text-primary-foreground hover:shadow-primary/30"
            )}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span>جاري التصميم...</span>
              </>
            ) : (
              <>
                <span>اصنع التهنئة</span>
                <span>🌙</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
