'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DragDropUpload from '@/components/DragDropUpload';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  serviceCategory: string;
  quantity: number;
  size: string;
  material: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export default function CustomOrderPage() {
  const { t } = useTranslations();
  const [step, setStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const categoryOptions = [
    { value: 'mouse-pad', label: t.customOrder.categories.mousePad },
    { value: 'award', label: t.customOrder.categories.award },
    { value: 'folder', label: t.customOrder.categories.folder },
    { value: 'clothes', label: t.customOrder.categories.clothes },
    { value: 'business-card-holder', label: t.customOrder.categories.businessCardHolder },
    { value: 'disposable', label: t.customOrder.categories.disposable },
    { value: 'corporate-gift-set', label: t.customOrder.categories.corporateGiftSet },
    { value: 'gift-set', label: t.customOrder.categories.giftSet },
    { value: 'flash-drive', label: t.customOrder.categories.flashDrive },
    { value: 'thermos', label: t.customOrder.categories.thermos },
    { value: 'clock', label: t.customOrder.categories.clock },
    { value: 'bags', label: t.customOrder.categories.bags },
    { value: 'card-holder', label: t.customOrder.categories.cardHolder },
    { value: 'keychain', label: t.customOrder.categories.keychain },
    { value: 'notebook', label: t.customOrder.categories.notebook },
    { value: 'umbrella', label: t.customOrder.categories.umbrella },
    { value: 'pen', label: t.customOrder.categories.pen },
    { value: 'keyboard', label: t.customOrder.categories.keyboard },
    { value: 'laptop', label: t.customOrder.categories.laptop },
    { value: 'daily-planner', label: t.customOrder.categories.dailyPlanner },
  ];

  const onSubmit = (data: FormData) => {
    console.log('Order submitted:', { ...data, files: uploadedFiles });
    alert('Order submitted successfully!');
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center text-light-text dark:text-dark-text"
          >
            {t.customOrder.title}
          </motion.h1>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 mx-1 rounded ${
                    s <= step
                      ? 'bg-light-primary dark:bg-dark-primary'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{t.customOrder.step1}</span>
              <span>{t.customOrder.step2}</span>
              <span>{t.customOrder.step3}</span>
              <span>{t.customOrder.step4}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                    {t.customOrder.step1}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        {t.customOrder.selectService}
                      </label>
                      <select
                        {...register('serviceCategory', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      >
                        <option value="">{t.customOrder.selectPlaceholder}</option>
                        {categoryOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.serviceCategory && (
                        <p className="text-red-500 text-sm mt-1">{t.customOrder.fieldRequired}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Specifications */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                    {t.customOrder.step2}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        {t.customOrder.quantity}
                      </label>
                      <input
                        type="number"
                        {...register('quantity', { required: true, min: 1 })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        {t.customOrder.size}
                      </label>
                      <input
                        type="text"
                        {...register('size')}
                        placeholder={t.customOrder.sizePlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        {t.customOrder.material}
                      </label>
                      <input
                        type="text"
                        {...register('material')}
                        placeholder={t.customOrder.materialPlaceholder}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: File Upload */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                    {t.customOrder.step3}
                  </h2>
                  <DragDropUpload onFilesSelected={setUploadedFiles} />
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t.customOrder.filesSelected.replace('{count}', uploadedFiles.length.toString())}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Contact Details */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                    {t.customOrder.step4}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                        Additional Notes
                      </label>
                      <textarea
                        {...register('notes')}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-light-text dark:text-dark-text"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-light-text dark:text-dark-text rounded-lg disabled:opacity-50"
              >
                {t.customOrder.previous}
              </button>
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg"
                >
                  {t.customOrder.next}
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg"
                >
                  {t.customOrder.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

