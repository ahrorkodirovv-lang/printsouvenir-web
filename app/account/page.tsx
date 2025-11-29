'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface User {
  name?: string;
  email: string;
}

export default function AccountPage() {
  const router = useRouter();
  const { t } = useTranslations();
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      router.push('/auth/signin');
      return;
    }
    
    const userData = JSON.parse(userStr);
    setUser(userData);
    setEditData({
      name: userData.name || '',
      email: userData.email || '',
    });
    // Load orders for this user
    try {
      const all = JSON.parse(localStorage.getItem('orders') || '[]');
      const userOrders = all.filter((o: any) => o.userEmail === userData.email);
      setOrders(userOrders.reverse());
    } catch (e) {
      setOrders([]);
    }
    setIsLoading(false);
  }, [router]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: editData.name,
      email: editData.email,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
    router.push('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted">{t.common.loading}</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">
                {t.account.title}
              </h1>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>

            {/* Profile Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                {t.account.profileTitle}
              </h2>

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                      {t.account.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
                      {t.account.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-divider rounded-lg bg-card text-main focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      {t.account.saveChanges}
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 bg-card text-main rounded-lg hover:bg-section transition-colors"
                    >
                      {t.account.cancel}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg">
                    <p className="text-sm text-muted">Name</p>
                    <p className="text-lg font-semibold text-light-text dark:text-dark-text">
                      {user.name || 'Not provided'}
                    </p>
                  </div>
                  <div className="p-4 bg-card rounded-lg">
                    <p className="text-sm text-muted">Email</p>
                    <p className="text-lg font-semibold text-light-text dark:text-dark-text">
                      {user.email}
                    </p>
                  </div>
                  <button
                    onClick={handleEdit}
                    className="px-6 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {t.account.editProfile}
                  </button>
                </div>
              )}
            </div>

            {/* Orders Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                {t.account.myOrdersTitle}
              </h2>
                <div className="p-4 bg-card rounded-lg">
                  {orders.length === 0 ? (
                    <div className="text-center">
                      <p className="text-muted">{t.account.noOrders}</p>
                      <Link
                        href="/custom-order"
                        className="inline-block mt-4 px-6 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        {t.account.placeOrder}
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((o) => (
                        <div key={o.id} className="p-4 bg-card rounded-lg border border-divider">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm text-muted">Order ID: {o.id}</p>
                              <p className="text-lg font-semibold text-main">{o.serviceCategory || 'Custom Order'}</p>
                              <p className="text-sm text-muted">Qty: {o.quantity} — {new Date(o.createdAt).toLocaleString()}</p>
                              {o.notes && <p className="mt-2 text-sm text-muted">{o.notes}</p>}
                            </div>
                            <div className="text-right">
                              <p className={`px-3 py-1 rounded-full text-sm ${o.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                                {o.status}
                              </p>
                            </div>
                          </div>
                          {o.files && o.files.length > 0 && (
                            <p className="mt-2 text-sm text-muted">Files: {o.files.join(', ')}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
            </div>

            {/* Account Settings */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                  {t.account.accountSettingsTitle}
                </h2>
              <div className="space-y-2">
                <Link href="#" className="block p-4 bg-card rounded-lg hover:bg-section transition-colors">
                  <p className="font-medium text-main">{t.account.changePassword}</p>
                  <p className="text-sm text-muted">Update your password</p>
                </Link>
                <Link href="#" className="block p-4 bg-card rounded-lg hover:bg-section transition-colors">
                  <p className="font-medium text-main">{t.account.notificationPreferences}</p>
                  <p className="text-sm text-muted">Manage your notifications</p>
                </Link>
                <Link href="#" className="block p-4 bg-card rounded-lg hover:bg-section transition-colors">
                  <p className="font-medium text-main">{t.account.deleteAccount}</p>
                  <p className="text-sm text-muted">Permanently delete your account</p>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
