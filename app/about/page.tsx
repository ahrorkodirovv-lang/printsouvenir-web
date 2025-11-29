"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { InstagramIcon, TelegramIcon } from '@/components/SocialIcons';
import { useTranslations } from '@/hooks/useTranslations';

export default function AboutPage() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
              <p className="text-lg md:text-xl opacity-90">{t.about.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">{t.about.missionTitle}</h2>
              <p className="text-gray-700 dark:text-white">{t.about.missionText}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">{t.about.historyTitle}</h2>
              <p className="text-gray-700 dark:text-white">{t.about.historyText}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">{t.about.teamTitle}</h2>
              <p className="text-gray-700 dark:text-white">{t.about.teamText}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">{t.about.valuesTitle}</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-white space-y-2">
                <li>{t.about.values.quality}</li>
                <li>{t.about.values.sustainability}</li>
                <li>{t.about.values.customerFocus}</li>
              </ul>
            </div>

            <div className="pt-6">
              <p className="text-gray-700 dark:text-white mb-4">{t.about.ctaContact}</p>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2 dark:text-white">{t.contacts.title}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-white">
                  <li>
                    <a href={`tel:${String(t.contacts.phoneValue).replace(/\s+/g, '')}`} className="hover:underline">
                      📞 {t.contacts.phoneValue}
                    </a>
                  </li>
                  <li>
                    <a href={t.contacts.telegram} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                      <TelegramIcon /> Telegram
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${t.contacts.emailValue}`} className="hover:underline">
                      ✉️ {t.contacts.emailValue}
                    </a>
                  </li>
                  <li>
                    <a href={t.contacts.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                      <InstagramIcon /> Instagram
                    </a>
                  </li>
                  <li className="pt-2 border-t border-gray-300 dark:border-gray-600">
                    <span className="font-semibold">Support:</span>
                  </li>
                  <li>
                    <a href={`mailto:${t.contacts.supportEmail}`} className="hover:underline">
                      🎯 {t.contacts.supportEmail}
                    </a>
                  </li>
                </ul>
              </div>
              <Link
                href="/contacts"
                className="inline-block bg-light-primary text-white px-6 py-2 rounded-md font-semibold hover:opacity-90"
              >
                {t.contacts.title}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
