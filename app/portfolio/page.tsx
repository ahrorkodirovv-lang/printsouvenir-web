'use client';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThreeDViewer from '@/components/ThreeDViewer';
import Flipbook from '@/components/Flipbook';
import { motion } from 'framer-motion';

type FilterType = 'all' | 'tshirts' | 'brochures' | 'flyers' | 'mugs';

export default function PortfolioPage() {
  const { t } = useTranslations();
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<{ type: '3d' | 'flipbook'; image?: string; pages?: string[] } | null>(null);

  const portfolioItems = [
    { id: 1, title: 'Custom T-shirt Design', category: 'tshirts', type: '3d' as const, image: '/api/placeholder/400/400' },
    { id: 2, title: 'Corporate Brochure', category: 'brochures', type: 'flipbook' as const, pages: ['/api/placeholder/400/600', '/api/placeholder/400/600'] },
    { id: 3, title: 'Promotional Flyer', category: 'flyers', type: 'flipbook' as const, pages: ['/api/placeholder/400/600'] },
    { id: 4, title: 'Branded Mug', category: 'mugs', type: '3d' as const, image: '/api/placeholder/400/400' },
    { id: 5, title: 'Event T-shirt', category: 'tshirts', type: '3d' as const, image: '/api/placeholder/400/400' },
    { id: 6, title: 'Product Catalog', category: 'brochures', type: 'flipbook' as const, pages: ['/api/placeholder/400/600', '/api/placeholder/400/600', '/api/placeholder/400/600'] },
  ];

  const filters = [
    { key: 'all' as FilterType, label: t.portfolio.filterAll },
    { key: 'tshirts' as FilterType, label: t.portfolio.filterTshirts },
    { key: 'brochures' as FilterType, label: t.portfolio.filterBrochures },
    { key: 'flyers' as FilterType, label: t.portfolio.filterFlyers },
    { key: 'mugs' as FilterType, label: t.portfolio.filterMugs },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const handleItemClick = (item: typeof portfolioItems[0]) => {
    if (item.type === '3d') {
      setSelectedItem({ type: '3d', image: item.image });
    } else {
      setSelectedItem({ type: 'flipbook', pages: item.pages });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center text-light-text dark:text-dark-text"
          >
            {t.portfolio.title}
          </motion.h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === filterOption.key
                    ? 'bg-light-primary dark:bg-dark-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleItemClick(item)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">{item.title}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-light-text dark:text-dark-text">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Click to {item.type === '3d' ? 'view in 3D' : 'flip through'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* 3D Viewer Modal */}
      {selectedItem?.type === '3d' && selectedItem.image && (
        <ThreeDViewer
          imageUrl={selectedItem.image}
          onClose={() => setSelectedItem(null)}
        />
      )}

      {/* Flipbook Modal */}
      {selectedItem?.type === 'flipbook' && selectedItem.pages && (
        <Flipbook
          pages={selectedItem.pages}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

