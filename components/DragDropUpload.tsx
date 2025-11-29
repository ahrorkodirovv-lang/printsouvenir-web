'use client';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslations } from '@/hooks/useTranslations';

interface DragDropUploadProps {
  onFilesSelected: (files: File[]) => void;
  acceptedFileTypes?: string[];
}

export default function DragDropUpload({ onFilesSelected, acceptedFileTypes = ['image/*', '.pdf', '.ai', '.psd'] }: DragDropUploadProps) {
  const { t } = useTranslations();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesSelected(acceptedFiles);
  }, [onFilesSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce((acc, type) => {
      acc[type] = [];
      return acc;
    }, {} as Record<string, string[]>),
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive
          ? 'border-light-primary dark:border-dark-primary bg-light-primary/10 dark:bg-dark-primary/10'
          : 'border-gray-300 dark:border-gray-600 hover:border-light-primary dark:hover:border-dark-primary'
      }`}
    >
      <input {...getInputProps()} />
      <div className="text-4xl mb-4">📁</div>
      <p className="text-light-text dark:text-dark-text">
        {isDragActive ? 'Drop files here' : t.customOrder.dragDrop}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Accepted: PDF, AI, PSD, PNG, JPG
      </p>
    </div>
  );
}

