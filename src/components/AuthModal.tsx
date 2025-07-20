import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoginMode) {
      // Mock login
      const mockUser: User = {
        id: '1',
        firstName: 'Елена',
        lastName: 'Савра',
        email: formData.email || 'elena@example.com',
        phone: '+7 (999) 123-45-67',
        dateOfBirth: '1990-05-15',
        isVerified: true,
        createdAt: new Date().toISOString()
      };
      onLogin(mockUser);
    } else {
      // Mock registration
      const newUser: User = {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: '+7 (999) 123-45-67',
        dateOfBirth: '1990-01-01',
        isVerified: true,
        createdAt: new Date().toISOString()
      };
      onLogin(newUser);
    }
    
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-graphite border border-slate-dark rounded-lg p-8 w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-silver-dim hover:text-silver-bright"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-center text-silver-bright mb-6">
          {isLoginMode ? 'Вход в аккаунт' : 'Создать аккаунт'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginMode && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-silver-dim text-sm">Имя</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full border border-slate-dark bg-slate-dark text-silver-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-silver-accent"
                  placeholder="Елена"
                />
              </div>
              <div className="space-y-2">
                <label className="text-silver-dim text-sm">Фамилия</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full border border-slate-dark bg-slate-dark text-silver-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-silver-accent"
                  placeholder="Савра"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-silver-dim text-sm">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full border border-slate-dark bg-slate-dark text-silver-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-silver-accent"
              placeholder="elena@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-silver-dim text-sm">Пароль</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full border border-slate-dark bg-slate-dark text-silver-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-silver-accent pr-10"
                placeholder="Введите пароль"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-silver-shadow hover:text-silver-accent-light"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {!isLoginMode && (
            <div className="space-y-2">
              <label className="text-silver-dim text-sm">Подтвердите пароль</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full border border-slate-dark bg-slate-dark text-silver-muted p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-silver-accent"
                placeholder="Подтвердите пароль"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-silver-accent hover:bg-silver-accent-light text-silver-bright py-3 tracking-wide transition-all duration-300 rounded-md"
          >
            {isLoginMode ? 'Войти' : 'Создать аккаунт'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-silver-shadow">
            {isLoginMode ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
            <button 
              type="button"
              onClick={switchMode}
              className="text-silver-accent hover:text-chrome hover:underline transition-colors"
            >
              {isLoginMode ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}