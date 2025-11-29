'use client';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQCollapsible from '@/components/FAQCollapsible';
import { motion } from 'framer-motion';

export default function HelpPage() {
  const { t } = useTranslations();

  const faqs = [
    {
      question: t.help.faq.pricing.question,
      answer: t.help.faq.pricing.answer,
    },
    {
      question: t.help.faq.productionTime.question,
      answer: t.help.faq.productionTime.answer,
    },
    {
      question: t.help.faq.fileFormats.question,
      answer: t.help.faq.fileFormats.answer,
    },
    {
      question: t.help.faq.designServices.question,
      answer: t.help.faq.designServices.answer,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text"
          >
            {t.help.title}
          </motion.h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQCollapsible question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

