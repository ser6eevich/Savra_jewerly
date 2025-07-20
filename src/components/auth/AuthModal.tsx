import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Eye, EyeOff, Calendar, Phone, Shield } from 'lucide-react';
import { User } from '../../../lib/types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    verificationCode: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendCode = () => {
    if (formData.phone.length >= 10) {
      setCodeSent(true);
      console.log('Sending verification code to:', formData.phone);
    }
  };

  const handleVerifyCode = () => {
    if (formData.verificationCode.length === 6) {
      setIsVerifyingCode(true);
      setTimeout(() => {
        setPhoneVerified(true);
        setIsVerifyingCode(false);
        console.log('Phone verified successfully');
      }, 1500);
    }
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
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        isVerified: phoneVerified,
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
      phone: '',
      verificationCode: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: '',
      agreeToTerms: false,
      subscribeNewsletter: true
    });
    setCodeSent(false);
    setPhoneVerified(false);
    setIsVerifyingCode(false);
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    resetForm();
  };

  const isFormValid = isLoginMode ? 
    formData.email && formData.password : 
    formData.agreeToTerms && phoneVerified;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-graphite border-slate-dark">
        <DialogHeader>
          <DialogTitle className="text-center text-silver-bright">
            {isLoginMode ? 'Вход в аккаунт' : 'Создать аккаунт'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isLoginMode ? (
            // Login Form
            <>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-silver-dim">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                  placeholder="elena@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-silver-dim">Пароль</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted pr-10"
                    placeholder="Введите пароль"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-silver-shadow hover:text-silver-accent-light"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            // Registration Form
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-silver-dim">Имя</Label>
                  <Input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    placeholder="Елена"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-silver-dim">Фамилия</Label>
                  <Input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    placeholder="Савра"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-silver-dim">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                  placeholder="elena@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-silver-dim flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Номер телефона
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    placeholder="+7 (999) 123-45-67"
                    disabled={phoneVerified}
                  />
                  {!phoneVerified && (
                    <Button
                      type="button"
                      onClick={handleSendCode}
                      disabled={formData.phone.length < 10 || codeSent}
                      variant="outline"
                      className="border-slate-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright disabled:opacity-50"
                    >
                      {codeSent ? 'Отправлен' : 'Код'}
                    </Button>
                  )}
                  {phoneVerified && (
                    <div className="flex items-center px-3 py-2 bg-silver-accent rounded-md">
                      <Shield className="w-4 h-4 text-silver-bright" />
                    </div>
                  )}
                </div>
              </div>

              {codeSent && !phoneVerified && (
                <div className="space-y-2">
                  <Label htmlFor="verificationCode" className="text-silver-dim">
                    Код подтверждения
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="verificationCode"
                      type="text"
                      required
                      maxLength={6}
                      value={formData.verificationCode}
                      onChange={(e) => handleInputChange('verificationCode', e.target.value)}
                      className="flex-1 border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted text-center tracking-widest"
                      placeholder="123456"
                    />
                    <Button
                      type="button"
                      onClick={handleVerifyCode}
                      disabled={formData.verificationCode.length !== 6 || isVerifyingCode}
                      variant="outline"
                      className="border-slate-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright disabled:opacity-50"
                    >
                      {isVerifyingCode ? 'Проверка...' : 'Проверить'}
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-silver-dim">Дата рождения</Label>
                <div className="relative">
                  <Input
                    id="dateOfBirth"
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-silver-shadow pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-silver-dim">Пароль</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted pr-10"
                    placeholder="Введите пароль"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-silver-shadow hover:text-silver-accent-light"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-silver-dim">Подтвердите пароль</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted pr-10"
                    placeholder="Подтвердите пароль"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-silver-shadow hover:text-silver-accent-light"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                    className="mt-1 border-slate-dark data-[state=checked]:bg-silver-accent data-[state=checked]:border-silver-accent"
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm text-silver-dim leading-relaxed">
                    Я соглашаюсь с{' '}
                    <button type="button" className="text-silver-accent hover:text-chrome hover:underline transition-colors">
                      Условиями использования
                    </button>{' '}
                    и{' '}
                    <button type="button" className="text-silver-accent hover:text-chrome hover:underline transition-colors">
                      Политикой конфиденциальности
                    </button>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) => handleInputChange('subscribeNewsletter', checked as boolean)}
                    className="mt-1 border-slate-dark data-[state=checked]:bg-silver-accent data-[state=checked]:border-silver-accent"
                  />
                  <Label htmlFor="subscribeNewsletter" className="text-sm text-silver-dim leading-relaxed">
                    Хочу получать новости о новых изделиях и эксклюзивных предложениях
                  </Label>
                </div>
              </div>
            </>
          )}

          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-silver-accent hover:bg-silver-accent-light text-silver-bright py-3 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isLoginMode ? 'Войти' : 'Создать аккаунт'}
          </Button>

          {!isLoginMode && !phoneVerified && formData.phone && (
            <div className="text-center text-sm text-silver-shadow">
              Для завершения регистрации необходимо подтвердить номер телефона
            </div>
          )}
        </form>

        <div className="text-center">
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
      </DialogContent>
    </Dialog>
  );
}