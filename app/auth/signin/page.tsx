'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Check local accounts for credentials (demo only)
      const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
      const account = accounts.find((a: any) => a.email === formData.email);
      if (account) {
        // Verify password
        if (account.password !== formData.password) {
          setErrors({ password: 'Invalid credentials' });
          setIsLoading(false);
          return;
        }
        // Restore name from account
        const userToStore = { email: account.email, name: account.name };
        localStorage.setItem('user', JSON.stringify(userToStore));
      } else {
        // No account found — prompt user to sign up (but still allow session)
        setErrors({ email: 'No account found. Please sign up.' });
        setIsLoading(false);
        return;
      }

      if (formData.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      router.push('/');
    } catch (error) {
      console.error('Sign in error:', error);
      setErrors({ email: 'Sign in failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-lg shadow-lg p-8"
          >
            <h1 className="text-3xl font-bold mb-6 text-center text-light-text dark:text-dark-text">
              Sign In
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2"
                  placeholder="••••••"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-light-primary rounded focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-muted">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-light-primary dark:text-dark-primary hover:underline font-semibold">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-light-primary dark:bg-dark-primary text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6">
              <p className="text-center text-muted">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="text-light-primary dark:text-dark-primary hover:underline font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
