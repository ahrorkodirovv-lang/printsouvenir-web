'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'code' | 'reset'>('email');
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Sending reset code to:', formData.email);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store email in sessionStorage for verification
      sessionStorage.setItem('resetEmail', formData.email);
      // Generate mock code (in real app, this comes from backend)
      sessionStorage.setItem('resetCode', '123456');
      
      setMessage('A reset code has been sent to your email');
      setStep('code');
    } catch (error) {
      console.error('Error:', error);
      setErrors({ email: 'Failed to send reset code. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.code.trim()) {
      newErrors.code = 'Reset code is required';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      const storedCode = sessionStorage.getItem('resetCode');
      
      // TODO: Replace with actual API verification
      if (formData.code !== storedCode) {
        setErrors({ code: 'Invalid reset code' });
        setIsLoading(false);
        return;
      }

      setMessage('Code verified. Now set your new password.');
      setStep('reset');
      setErrors({});
    } catch (error) {
      console.error('Error:', error);
      setErrors({ code: 'Failed to verify code. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      const email = sessionStorage.getItem('resetEmail');
      
      // TODO: Replace with actual API call
      console.log('Resetting password for:', email);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Clear session storage
      sessionStorage.removeItem('resetEmail');
      sessionStorage.removeItem('resetCode');

      setMessage('Password reset successful! Redirecting to sign in...');
      setTimeout(() => {
        router.push('/auth/signin');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setErrors({ newPassword: 'Failed to reset password. Please try again.' });
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
            <h1 className="text-3xl font-bold mb-6 text-center text-main">
              Reset Password
            </h1>

            {message && (
              <div className="mb-4 p-4 bg-card text-main rounded-lg text-sm border border-divider">
                {message}
              </div>
            )}

            {/* Step 1: Email Verification */}
            {step === 'email' && (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-main">
                    Enter your email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                        className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Code'}
                </button>
              </form>
            )}

            {/* Step 2: Code Verification */}
            {step === 'code' && (
              <form onSubmit={handleCodeSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-main">
                    Enter the reset code sent to your email
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                        className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2 focus:ring-primary text-center text-2xl letter-spacing"
                    placeholder="123456"
                    maxLength="6"
                  />
                  {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code}</p>}
                      <p className="text-xs text-muted mt-2">Demo code: 123456</p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? 'Verifying...' : 'Verify Code'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="w-full text-primary hover:underline"
                >
                  Back to Email
                </button>
              </form>
            )}

            {/* Step 3: New Password */}
            {step === 'reset' && (
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                      className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••"
                  />
                  {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                      className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            )}

            <div className="mt-6">
              <p className="text-center text-muted">
                Remember your password?{' '}
                <Link href="/auth/signin" className="text-primary hover:underline font-semibold">
                  Sign In
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
