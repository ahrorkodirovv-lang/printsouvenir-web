'use client';
import { useState } from 'react';

interface FlipbookProps {
  pages: string[];
  onClose: () => void;
}

export default function Flipbook({ pages, onClose }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          ✕
        </button>
        <div className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Page {currentPage + 1} of {pages.length}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded disabled:opacity-50"
          >
            ← Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

