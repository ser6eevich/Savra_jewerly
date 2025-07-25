import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, Trash2, Tag, CreditCard, Calendar } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onNavigate: (page: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

// Demo cart item for display
const demoCartItem: CartItem = {
  id: '1',
  name: 'Кольцо Эрозии',
  price: 10250,
  image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
  quantity: 1,
  size: '18'
};

export function CartPage({ cartItems, onNavigate, onUpdateQuantity, onRemoveItem }: CartPageProps) {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Use demo item if cart is empty for display purposes
  const displayItems = cartItems.length > 0 ? cartItems : [demoCartItem];

  const subtotal = displayItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = promoApplied ? promoDiscount : 0;
  const delivery = subtotal > 5000 ? 0 : 500;
  const total = subtotal - discount + delivery;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'savra10') {
      setPromoApplied(true);
      setPromoDiscount(Math.floor(subtotal * 0.1));
    }
  };

  const handleRemovePromo = () => {
    setPromoApplied(false);
    setPromoDiscount(0);
    setPromoCode('');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => onNavigate('catalog')}
            className="mr-4 p-2 hover:bg-graphite text-silver-dim hover:text-silver-accent-light rounded-md flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Продолжить покупки
          </button>
          <h1 className="text-silver-bright">Корзина</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {displayItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="bg-graphite rounded-lg p-6 border border-slate-dark">
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-slate-dark rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-silver-bright">{item.name}</h3>
                        {item.size && <p className="text-silver-dim text-sm">Размер: {item.size}</p>}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-silver-dim hover:text-red-400 hover:bg-transparent"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0 border border-steel-dark hover:bg-steel-dark rounded-md flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-silver-muted">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0 border border-steel-dark hover:bg-steel-dark rounded-md flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-chrome">₽{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-graphite rounded-lg p-6 border border-slate-dark h-fit">
            <h2 className="text-silver-bright mb-6">Итого</h2>
            
            {/* Promo Code */}
            <div className="mb-6">
              <h3 className="text-silver-muted mb-3">Промокод</h3>
              {!promoApplied ? (
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-silver-shadow" />
                    <input
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="pl-10 border border-slate-dark bg-slate-dark text-silver-muted w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-silver-accent"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="border border-steel-dark hover:bg-steel-dark px-4 py-2 rounded-md text-silver-dim hover:text-silver-bright"
                  >
                    Применить
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-steel-dark p-3 rounded border border-silver-accent">
                  <span className="text-silver-bright">Промокод SAVRA10</span>
                  <button
                    onClick={handleRemovePromo}
                    className="text-silver-dim hover:text-red-400 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-silver-dim">Подытог:</span>
                <span className="text-silver-muted">₽{subtotal.toLocaleString()}</span>
              </div>
              
              {promoApplied && (
                <div className="flex justify-between text-silver-accent">
                  <span>Скидка:</span>
                  <span>-₽{discount.toLocaleString()}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-silver-dim">Доставка:</span>
                <span className="text-silver-muted">
                  {delivery === 0 ? 'Бесплатно' : `₽${delivery.toLocaleString()}`}
                </span>
              </div>
              
              <hr className="border-slate-dark" />
              
              <div className="flex justify-between">
                <span className="text-silver-bright">Итого:</span>
                <span className="text-chrome">₽{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
              <button className="w-full bg-silver-accent hover:bg-silver-accent-light text-silver-bright py-3 tracking-wide transition-all duration-300 rounded-md flex items-center justify-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Купить сейчас
              </button>
              
              <button className="w-full border border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright py-3 tracking-wide transition-all duration-300 rounded-md flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Купить в рассрочку
              </button>
            </div>

            {/* Installment Info */}
            <div className="mt-4 p-3 bg-slate-dark rounded text-sm text-silver-dim">
              <p className="mb-1">Рассрочка 0-0-12:</p>
              <p>₽{Math.floor(total / 12).toLocaleString()} × 12 месяцев</p>
              <p className="text-silver-shadow text-xs mt-1">Без переплат и скрытых комиссий</p>
            </div>

            {/* Delivery Info */}
            <div className="mt-4 p-3 bg-slate-dark rounded text-sm text-silver-dim">
              <p className="mb-1">Доставка:</p>
              <p>По Москве: 1-2 дня</p>
              <p>По России: 3-7 дней</p>
              <p className="text-silver-shadow text-xs mt-1">
                Бесплатная доставка при заказе от ₽5,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}