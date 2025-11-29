'use client';
import { useEffect } from 'react';
import { useStore } from '@/hooks/useStore';
import { useTranslations } from '@/hooks/useTranslations';

export default function LanguageSwitcher() {
  const { locale } = useTranslations();
  const setLocale = useStore((state) => state.setLocale);
  const initialize = useStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const languages = [
    { code: 'uz' as const, label: 'UZ' },
    { code: 'ru' as const, label: 'RU' },
    { code: 'en' as const, label: 'EN' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === lang.code
              ? 'bg-light-primary dark:bg-dark-primary text-white'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

