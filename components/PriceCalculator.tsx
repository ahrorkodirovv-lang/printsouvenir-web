'use client';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

interface PriceCalculation {
  product: string;
  quantity: number;
  options: Record<string, any>;
}

export default function PriceCalculator() {
  const { t } = useTranslations();
  const [product, setProduct] = useState('flyers');
  const [quantity, setQuantity] = useState(100);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Mock pricing logic - replace with real calculations
  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      flyers: 0.05,
      brochures: 0.15,
      businessCards: 0.10,
      tshirts: 15,
      mugs: 8,
    };

    const basePrice = basePrices[product] || 0.05;
    const total = basePrice * quantity;
    setEstimatedPrice(total);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-light-text dark:text-dark-text">
        Price Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
            Product
          </label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
          >
            <option value="flyers">Flyers</option>
            <option value="brochures">Brochures</option>
            <option value="businessCards">Business Cards</option>
            <option value="tshirts">T-shirts</option>
            <option value="mugs">Mugs</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
          />
        </div>
        <button
          onClick={calculatePrice}
          className="w-full bg-light-primary dark:bg-dark-primary text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Calculate Price
        </button>
        {estimatedPrice !== null && (
          <div className="mt-4 p-4 bg-light-accent/20 dark:bg-dark-accent/20 rounded-lg">
            <p className="text-lg font-semibold text-light-text dark:text-dark-text">
              Estimated Price: ${estimatedPrice.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

