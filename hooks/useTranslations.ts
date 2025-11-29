'use client';
import { useEffect, useState } from 'react';
import { useStore } from './useStore';
import { translations, type TranslationKey } from '@/lib/i18n';

export function useTranslations() {
  const locale = useStore((state) => state.locale);
  const initialize = useStore((state) => state.initialize);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initialize();
  }, [initialize]);

  // Always use 'en' during SSR to match server rendering
  const currentLocale = mounted ? locale : 'en';
  const t = translations[currentLocale];

  return {
    t,
    locale: currentLocale,
  };
}

