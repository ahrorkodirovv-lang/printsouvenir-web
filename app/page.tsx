'use client';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslations();

  const benefits = [
    {
      icon: '⚡',
      title: t.home.benefits.fast.title,
      description: t.home.benefits.fast.description,
    },
    {
      icon: '💰',
      title: t.home.benefits.affordable.title,
      description: t.home.benefits.affordable.description,
    },
    {
      icon: '✨',
      title: t.home.benefits.professional.title,
      description: t.home.benefits.professional.description,
    },
  ];

  const services = [
    {
      title: t.home.services.printing,
      href: '/services',
      icon: '🖨️',
    },
    {
      title: t.home.services.souvenirs,
      href: '/services',
      icon: '🎁',
    },
    {
      title: t.home.services.design,
      href: '/services',
      icon: '🎨',
    },
  ];

  const portfolioItems = [
    { id: 1, title: 'Corporate Brochure', category: 'brochures', image: '/api/placeholder/400/300' },
    { id: 2, title: 'Custom T-shirt', category: 'tshirts', image: '/api/placeholder/400/300' },
    { id: 3, title: 'Business Cards', category: 'businessCards', image: '/api/placeholder/400/300' },
    { id: 4, title: 'Promotional Mug', category: 'mugs', image: '/api/placeholder/400/300' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t.home.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {t.home.hero.subtitle}
              </p>
              <Link
                href="/custom-order"
                className="inline-block bg-white text-light-primary dark:text-dark-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.home.hero.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
              {t.home.services.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="block p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                      {service.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Portfolio */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">
                {t.home.portfolio.title}
              </h2>
              <Link
                href="/portfolio"
                className="text-light-primary dark:text-dark-primary hover:underline"
              >
                {t.home.portfolio.viewAll} →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">{item.title}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-light-text dark:text-dark-text">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Calculator Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <PriceCalculator />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
