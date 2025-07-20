import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowLeft, Camera, Edit2, Save, X } from 'lucide-react';
import { User } from '../../../lib/types';

interface ProfilePageProps {
  user: User;
  onNavigate: (page: string) => void;
  onUpdateUser: (user: User) => void;
}

export function ProfilePage({ user, onNavigate, onUpdateUser }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user.avatar || null);

  const handleInputChange = (field: keyof User, value: string) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAvatarPreview(result);
        setEditedUser(prev => ({
          ...prev,
          avatar: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdateUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setAvatarPreview(user.avatar || null);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={() => onNavigate('home')}
              className="p-2 hover:bg-graphite text-silver-dim hover:text-silver-accent-light"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            <h1 className="text-silver-bright">Личный кабинет</h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>

          {/* Profile Card */}
          <div className="bg-graphite rounded-lg p-8 border border-slate-dark">
            {/* Avatar Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-slate-dark border-2 border-silver-accent overflow-hidden">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-silver-dim text-4xl font-light">
                      {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </div>
                  )}
                </div>
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-silver-accent hover:bg-silver-accent-light text-silver-bright p-2 rounded-full cursor-pointer transition-colors">
                    <Camera className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <h2 className="mt-4 text-xl text-silver-bright">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-silver-dim">{user.email}</p>
            </div>

            {/* Profile Information */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-silver-bright">Личная информация</h3>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    className="border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Редактировать
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      className="bg-silver-accent hover:bg-silver-accent-light text-silver-bright"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Сохранить
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Отмена
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-silver-dim">Имя</Label>
                  {isEditing ? (
                    <Input
                      id="firstName"
                      value={editedUser.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    />
                  ) : (
                    <p className="text-silver-muted py-2">{user.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-silver-dim">Фамилия</Label>
                  {isEditing ? (
                    <Input
                      id="lastName"
                      value={editedUser.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    />
                  ) : (
                    <p className="text-silver-muted py-2">{user.lastName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-silver-dim">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={editedUser.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    />
                  ) : (
                    <p className="text-silver-muted py-2">{user.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-silver-dim">Телефон</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      type="tel"
                      value={editedUser.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    />
                  ) : (
                    <p className="text-silver-muted py-2">{user.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-silver-dim">Дата рождения</Label>
                  {isEditing ? (
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={editedUser.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="border-slate-dark focus:border-silver-accent bg-slate-dark text-silver-muted"
                    />
                  ) : (
                    <p className="text-silver-muted py-2">
                      {new Date(user.dateOfBirth).toLocaleDateString('ru-RU')}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-silver-dim">Статус верификации</Label>
                  <div className="flex items-center py-2">
                    <div className={`w-2 h-2 rounded-full mr-2 ${user.isVerified ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <span className="text-silver-muted">
                      {user.isVerified ? 'Подтвержден' : 'Требует подтверждения'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Account Statistics */}
              <div className="border-t border-slate-dark pt-6">
                <h3 className="text-lg text-silver-bright mb-4">Статистика аккаунта</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-dark p-4 rounded-lg">
                    <p className="text-silver-shadow text-sm">Дата регистрации</p>
                    <p className="text-silver-muted">
                      {new Date(user.createdAt).toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                  <div className="bg-slate-dark p-4 rounded-lg">
                    <p className="text-silver-shadow text-sm">Заказов</p>
                    <p className="text-silver-muted">0</p>
                  </div>
                  <div className="bg-slate-dark p-4 rounded-lg">
                    <p className="text-silver-shadow text-sm">В избранном</p>
                    <p className="text-silver-muted">2</p>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="border-t border-slate-dark pt-6">
                <h3 className="text-lg text-silver-bright mb-4">Безопасность</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
                  >
                    Изменить пароль
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
                  >
                    Настройки уведомлений
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
                  >
                    Двухфакторная аутентификация
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}