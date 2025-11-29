'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

interface ThreeDViewerProps {
  imageUrl: string;
  onClose: () => void;
}

function ProductModel({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  // For demo purposes, using a simple color instead of texture loading
  // In production, you would load actual 3D models or use proper texture loading

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial color="#4A90E2" />
    </mesh>
  );
}

export default function ThreeDViewer({ imageUrl, onClose }: ThreeDViewerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-700 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          ✕
        </button>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ProductModel imageUrl={imageUrl} />
            <OrbitControls enableZoom={true} enablePan={false} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded">
          Drag to rotate • Scroll to zoom
        </div>
      </div>
    </div>
  );
}

