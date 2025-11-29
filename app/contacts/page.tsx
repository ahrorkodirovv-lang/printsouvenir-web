'use client';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ContactsPage() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text"
          >
            {t.contacts.title}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
                    {t.contacts.email}
                  </h3>
                  <a
                    href="mailto:info@printsouvenir.com"
                    className="text-light-primary dark:text-dark-primary hover:underline"
                  >
                    info@printsouvenir.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
                    {t.contacts.phone}
                  </h3>
                  <a
                    href="tel:+998901234567"
                    className="text-light-primary dark:text-dark-primary hover:underline"
                  >
                    +998 90 123 45 67
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
                    {t.contacts.address}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Business Street<br />
                    Tashkent, Uzbekistan
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-light-text dark:text-dark-text mb-4">
                    {t.contacts.socialMedia}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-light-primary dark:text-dark-primary hover:underline"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-light-primary dark:text-dark-primary hover:underline"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Map will be embedded here
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    (Google Maps or Yandex Maps)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

