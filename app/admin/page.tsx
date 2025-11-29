'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'portfolio' | 'orders' | 'prices'>('products');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-light-text dark:text-dark-text">
            Admin Panel
          </h1>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
            {[
              { id: 'products', label: 'Products & Services' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'orders', label: 'Orders' },
              { id: 'prices', label: 'Price Calculator' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-light-text dark:hover:text-dark-text'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            {activeTab === 'products' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                  Manage Products & Services
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Add, edit, or delete products and services.
                </p>
                <button className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg">
                  Add New Product
                </button>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                  Manage Portfolio
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Upload new portfolio items, images, and 3D models.
                </p>
                <button className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg">
                  Upload New Item
                </button>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                  View Orders
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  View and manage incoming custom orders.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  Order list will be displayed here
                </div>
              </div>
            )}

            {activeTab === 'prices' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                  Update Price Calculator
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Update prices for the price calculator widget.
                </p>
                <button className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg">
                  Update Prices
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

