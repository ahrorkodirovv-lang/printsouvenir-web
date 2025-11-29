import { create } from 'zustand';

interface AppState {
  locale: 'en' | 'ru' | 'uz';
  setLocale: (locale: 'en' | 'ru' | 'uz') => void;
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
  initialized: boolean;
  initialize: () => void;
}

export const useStore = create<AppState>((set, get) => ({
  locale: 'en', // Always start with 'en' to match server
  initialized: false,
  initialize: () => {
    if (typeof window !== 'undefined' && !get().initialized) {
      const savedLocale = localStorage.getItem('locale') as 'en' | 'ru' | 'uz' | null;
      if (savedLocale && ['en', 'ru', 'uz'].includes(savedLocale)) {
        set({ locale: savedLocale, initialized: true });
      } else {
        set({ initialized: true });
      }
    }
  },
  setLocale: (locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
    set({ locale });
  },
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));

