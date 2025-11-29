'use client';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';

export default function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">
              {t.footer.company}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fast, Affordable, and Professional printing and souvenir services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">
              {t.footer.services}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                  {t.services.printing.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                  {t.services.souvenirs.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                  {t.services.design.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">
              {t.footer.support}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                  {t.nav.help}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                  {t.nav.contacts}
                </Link>
              </li>
              <li>
                <Link href="/custom-order" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                  {t.nav.customOrder}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-text dark:text-dark-text">
              {t.footer.followUs}
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                Instagram
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Printing & Souvenir Company. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}

