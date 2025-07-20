import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Product, RingCategory } from '../../lib/types';
import { getRingsByCategory, categoryNames } from '../../lib/data';

interface RingConstructorPageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product & { size: string }) => void;
}

export function RingConstructorPage({ onNavigate, onAddToCart }: RingConstructorPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<RingCategory | null>(null);
  const [selectedRing, setSelectedRing] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const categories: RingCategory[] = ['classic', 'textured', 'mens'];
  const availableRings = selectedCategory ? getRingsByCategory(selectedCategory) : [];

  const handleCategorySelect = (category: RingCategory) => {
    setSelectedCategory(category);
    setSelectedRing(null);
    setSelectedSize('');
  };

  const handleRingSelect = (ring: Product) => {
    setSelectedRing(ring);
    setSelectedSize('');
  };

  const handlePlaceOrder = () => {
    if (selectedRing && selectedSize) {
      onAddToCart({ ...selectedRing, size: selectedSize });
      setIsOrderModalOpen(true);
    }
  };

  const resetConstructor = () => {
    setSelectedCategory(null);
    setSelectedRing(null);
    setSelectedSize('');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-silver-bright">Конструктор Колец</h1>
          <Button
            variant="outline"
            onClick={resetConstructor}
            className="border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
          >
            Сбросить
          </Button>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${selectedCategory ? 'text-silver-accent' : 'text-silver-dim'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 ${
                selectedCategory ? 'border-silver-accent bg-silver-accent text-silver-bright' : 'border-silver-dim'
              }`}>
                1
              </div>
              <span>Категория</span>
            </div>
            <div className={`w-8 h-0.5 ${selectedCategory ? 'bg-silver-accent' : 'bg-silver-dim'}`} />
            <div className={`flex items-center ${selectedRing ? 'text-silver-accent' : 'text-silver-dim'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 ${
                selectedRing ? 'border-silver-accent bg-silver-accent text-silver-bright' : 'border-silver-dim'
              }`}>
                2
              </div>
              <span>Модель</span>
            </div>
            <div className={`w-8 h-0.5 ${selectedRing ? 'bg-silver-accent' : 'bg-silver-dim'}`} />
            <div className={`flex items-center ${selectedSize ? 'text-silver-accent' : 'text-silver-dim'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 ${
                selectedSize ? 'border-silver-accent bg-silver-accent text-silver-bright' : 'border-silver-dim'
              }`}>
                3
              </div>
              <span>Размер</span>
            </div>
          </div>
        </div>

        {/* Step 1: Category Selection */}
        {!selectedCategory && (
          <div className="text-center mb-12">
            <h2 className="mb-6 text-silver-bright">Выберите категорию кольца</h2>
            <p className="text-silver-dim mb-8 max-w-2xl mx-auto">
              Каждая категория представляет уникальный стиль и философию дизайна. 
              Выберите то, что отражает вашу индивидуальность.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-graphite rounded-lg p-6 border border-slate-dark hover:border-silver-accent cursor-pointer transition-all duration-300 group"
                >
                  <div className="aspect-square bg-slate-dark rounded-lg mb-4 overflow-hidden">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&crop=center&auto=format&q=80`}
                      alt={categoryNames[category]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-silver-bright mb-2">{categoryNames[category]}</h3>
                  <p className="text-silver-dim text-sm">
                    {category === 'classic' && 'Элегантные формы и классические пропорции'}
                    {category === 'textured' && 'Уникальные текстуры, вдохновленные природой'}
                    {category === 'mens' && 'Мужественные дизайны увеличенных размеров'}
                  </p>
                  <div className="mt-4">
                    <Badge variant="secondary" className="bg-slate-dark text-silver-dim">
                      {getRingsByCategory(category).length} моделей
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Ring Selection */}
        {selectedCategory && !selectedRing && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="mb-4 text-silver-bright">
                Выберите модель из категории "{categoryNames[selectedCategory]}"
              </h2>
              <p className="text-silver-dim">
                Доступно {availableRings.length} уникальных моделей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {availableRings.map((ring) => (
                <div
                  key={ring.id}
                  onClick={() => handleRingSelect(ring)}
                  className="bg-graphite rounded-lg border border-slate-dark overflow-hidden hover:border-silver-accent cursor-pointer transition-all duration-300 group"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={ring.image}
                      alt={ring.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-silver-bright">{ring.name}</h3>
                      <p className="text-sm text-silver-dim">{ring.description}</p>
                      <p className="text-chrome tracking-wide">₽{ring.price.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="bg-slate-dark text-silver-dim text-xs">
                        {ring.collection}
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-dark text-silver-dim text-xs">
                        {ring.material.split(',')[0]}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Size Selection and Order */}
        {selectedRing && (
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ring Details */}
              <div className="space-y-6">
                <div className="aspect-square bg-graphite rounded-lg overflow-hidden border border-slate-dark">
                  <ImageWithFallback
                    src={selectedRing.image}
                    alt={selectedRing.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="aspect-square bg-slate-dark rounded border border-slate-dark">
                      <ImageWithFallback
                        src={selectedRing.image}
                        alt={`${selectedRing.name} вид ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Configuration */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-2 bg-slate-dark text-silver-dim">
                    {selectedRing.collection}
                  </Badge>
                  <h2 className="text-silver-bright mb-2">{selectedRing.name}</h2>
                  <p className="text-silver-dim">{selectedRing.description}</p>
                </div>

                <div className="py-4 border-t border-b border-slate-dark">
                  <span className="text-2xl text-chrome tracking-wide">
                    ₽{selectedRing.price.toLocaleString()}
                  </span>
                </div>

                {/* Characteristics */}
                <div className="space-y-4">
                  <h3 className="text-silver-bright">Характеристики</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between py-2 border-b border-slate-dark">
                      <span className="text-silver-dim">Материал:</span>
                      <span className="text-silver-muted">{selectedRing.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-dark">
                      <span className="text-silver-dim">Коллекция:</span>
                      <span className="text-silver-muted">{selectedRing.collection}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-dark">
                      <span className="text-silver-dim">Артикул:</span>
                      <span className="text-silver-muted">{selectedRing.article}</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <h3 className="text-silver-bright">Выберите размер</h3>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full border-slate-dark bg-graphite text-silver-muted">
                      <SelectValue placeholder="Выберите размер кольца" />
                    </SelectTrigger>
                    <SelectContent className="bg-graphite border-slate-dark">
                      {selectedRing.sizes.map((size) => (
                        <SelectItem key={size} value={size} className="text-silver-muted hover:bg-slate-dark">
                          Размер {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-silver-shadow">
                    Не знаете свой размер? <button className="text-silver-accent hover:text-silver-accent-light">Таблица размеров</button>
                  </p>
                </div>

                {/* Order Button */}
                <Button
                  onClick={handlePlaceOrder}
                  disabled={!selectedSize}
                  className="w-full bg-silver-accent hover:bg-silver-accent-light text-silver-bright py-3 tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Оформить заказ
                </Button>

                {/* Description */}
                <div className="space-y-4 pt-6 border-t border-slate-dark">
                  <h3 className="text-silver-bright">Описание</h3>
                  <p className="text-silver-dim leading-relaxed">
                    {selectedRing.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Confirmation Modal */}
        <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
          <DialogContent className="sm:max-w-md bg-graphite border-slate-dark">
            <DialogHeader>
              <DialogTitle className="text-center text-silver-bright">
                Заказ оформлен!
              </DialogTitle>
            </DialogHeader>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-silver-accent rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-silver-bright" />
              </div>
              
              <div>
                <p className="text-silver-muted mb-2">
                  Кольцо "{selectedRing?.name}" размер {selectedSize}
                </p>
                <p className="text-silver-dim text-sm">
                  добавлено в корзину
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    setIsOrderModalOpen(false);
                    onNavigate('cart');
                  }}
                  className="flex-1 bg-silver-accent hover:bg-silver-accent-light text-silver-bright"
                >
                  Перейти в корзину
                </Button>
                <Button
                  onClick={() => {
                    setIsOrderModalOpen(false);
                    resetConstructor();
                  }}
                  variant="outline"
                  className="flex-1 border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright"
                >
                  Создать еще
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}