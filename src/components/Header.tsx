import React from 'react';
import { Heart, ShoppingBag, Menu, User, LogOut } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount: number;
  favoritesCount: number;
  user: UserType | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export function Header({ 
  currentPage, 
  onNavigate, 
  cartItemCount, 
  favoritesCount, 
  user, 
  onOpenAuth, 
  onLogout 
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-80 transition-opacity group"
          >
            <span className="text-xl tracking-wider text-silver-bright group-hover:text-chrome transition-colors">SAVRA</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`tracking-wide transition-colors hover:text-silver-accent-light ${
                currentPage === 'home' ? 'text-chrome' : 'text-silver-dim'
              }`}
            >
              ГЛАВНАЯ
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className={`tracking-wide transition-colors hover:text-silver-accent-light ${
                currentPage === 'catalog' ? 'text-chrome' : 'text-silver-dim'
              }`}
            >
              КАТАЛОГ
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`tracking-wide transition-colors hover:text-silver-accent-light ${
                currentPage === 'about' ? 'text-chrome' : 'text-silver-dim'
              }`}
            >
              О НАС
            </button>
            <button
              onClick={() => onNavigate('constructor')}
              className={`tracking-wide transition-colors hover:text-silver-accent-light ${
                currentPage === 'constructor' ? 'text-chrome' : 'text-silver-dim'
              }`}
            >
              КОНСТРУКТОР
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('favorites')}
              className="relative p-2 hover:bg-graphite text-silver-dim hover:text-silver-accent-light rounded-md transition-colors"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-silver-accent text-silver-bright text-xs rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-graphite text-silver-dim hover:text-silver-accent-light rounded-md transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-silver-accent text-silver-bright text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="relative group">
                <button className="hidden sm:inline-flex p-2 hover:bg-graphite text-silver-dim hover:text-silver-accent-light rounded-md transition-colors">
                  <div className="flex items-center gap-2">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt="Profile"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-silver-accent flex items-center justify-center text-xs text-silver-bright">
                        {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                      </div>
                    )}
                    <span className="hidden md:inline">{user.firstName}</span>
                  </div>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-graphite border border-slate-dark rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <button 
                    onClick={() => onNavigate('profile')}
                    className="w-full text-left px-4 py-2 text-silver-muted hover:bg-slate-dark hover:text-silver-bright flex items-center"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Личный кабинет
                  </button>
                  <hr className="border-slate-dark" />
                  <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-silver-muted hover:bg-slate-dark hover:text-silver-bright flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Выйти
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="hidden sm:inline-flex border border-steel-dark text-silver-dim hover:bg-silver-accent hover:text-silver-bright px-4 py-2 rounded-md transition-colors"
              >
                ВХОД
              </button>
            )}

            <button className="md:hidden p-2 text-silver-dim hover:text-silver-accent-light">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}