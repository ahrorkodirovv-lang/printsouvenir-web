'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
  const { t } = useTranslations();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/custom-order', label: t.nav.customOrder },
    { href: '/help', label: t.nav.help },
    { href: '/contacts', label: t.nav.contacts },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="h-12 w-auto flex-shrink-0 relative">
              <Image 
                src="/logos/dazzlegift.png/dazzle gift.png" 
                alt="Dazzle Gift Logo" 
                width={200}
                height={140}
                className="h-full w-auto object-contain dark:hidden"
                priority
              />
              <Image 
                src="/logos/dazzlegift.png/dazzle gift _darkmode.png" 
                alt="Dazzle Gift Logo" 
                width={200}
                height={140}
                className="h-full w-auto object-contain hidden dark:block"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-light-primary dark:text-dark-primary'
                    : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Theme Toggle & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

