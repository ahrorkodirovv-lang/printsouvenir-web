'use client';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const { t } = useTranslations();

  const printingServices = [
    { name: t.services.printing.flyers, icon: '📄' },
    { name: t.services.printing.brochures, icon: '📋' },
    { name: t.services.printing.businessCards, icon: '💼' },
    { name: t.services.printing.notepads, icon: '📓' },
    { name: t.services.printing.diaries, icon: '📔' },
  ];

  const souvenirServices = [
    { name: t.services.souvenirs.tshirts, icon: '👕' },
    { name: t.services.souvenirs.hoodies, icon: '🧥' },
    { name: t.services.souvenirs.sweatshirts, icon: '👔' },
    { name: t.services.souvenirs.mugs, icon: '☕' },
    { name: t.services.souvenirs.corporateGifts, icon: '🎁' },
  ];

  const designServices = [
    { name: t.services.design.customDesign, icon: '🎨' },
    { name: t.services.design.layoutRefinement, icon: '✏️' },
    { name: t.services.design.branding, icon: '🏷️' },
  ];

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
            {t.services.title}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Printing Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
                {t.services.printing.title}
              </h2>
              <ul className="space-y-4">
                {printingServices.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center space-x-3 text-light-text dark:text-dark-text"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Souvenir Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
                {t.services.souvenirs.title}
              </h2>
              <ul className="space-y-4">
                {souvenirServices.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center space-x-3 text-light-text dark:text-dark-text"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Design Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
                {t.services.design.title}
              </h2>
              <ul className="space-y-4">
                {designServices.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center space-x-3 text-light-text dark:text-dark-text"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Price Calculator */}
          <div className="mt-12 max-w-md mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

