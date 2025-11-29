import en from './en';
import ru from './ru';
import uz from './uz';

export const locales = ['en', 'ru', 'uz'] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en,
  ru,
  uz,
} as const;

export type TranslationKey = keyof typeof en;

