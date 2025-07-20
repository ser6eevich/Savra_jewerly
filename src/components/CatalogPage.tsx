import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { rings, categoryNames, getRingsByCategory } from '../data';
import { Product } from '../types';

interface CatalogPageProps {
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: string[];
}

export function CatalogPage({ onNavigate, onAddToCart, onToggleFavorite, favorites }: CatalogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'classic', 'textured', 'mens'];
  
  const filteredRings = selectedCategory === 'all' 
    ? rings 
    : getRingsByCategory(selectedCategory);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-silver-bright">Коллекция Колец</h1>
          <p className="text-silver-dim max-w-2xl mx-auto">
            Исследуйте нашу полную коллекцию уникальных серебряных колец ручной работы. 
            Каждое кольцо создано с особым вниманием к деталям и вдохновлено природными текстурами.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`tracking-wide transition-all duration-300 px-6 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-silver-accent text-silver-bright hover:bg-silver-accent-light'
                  : 'border border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright'
              }`}
            >
              {categoryNames[category as keyof typeof categoryNames]}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="text-center mb-8">
          <p className="text-silver-shadow">
            Найдено {filteredRings.length} из {rings.length} моделей
          </p>
        </div>

        {/* Ring Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRings.map((ring) => (
            <div key={ring.id} className="bg-graphite rounded-lg border border-slate-dark overflow-hidden transition-all duration-300 hover:border-silver-accent">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={ring.image}
                  alt={ring.name}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => onNavigate('product', ring.id)}
                />
              </div>
              
              <div className="p-4 space-y-3">
                <div className="space-y-2">
                  <h3 
                    className="text-silver-bright cursor-pointer hover:text-chrome transition-colors"
                    onClick={() => onNavigate('product', ring.id)}
                  >
                    {ring.name}
                  </h3>
                  <p className="text-sm text-silver-dim">{ring.description}</p>
                  <p className="text-chrome tracking-wide">₽{ring.price.toLocaleString()}</p>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => onToggleFavorite(ring.id)}
                    className={`flex-1 transition-all duration-300 px-4 py-2 rounded-md border ${
                      favorites.includes(ring.id) 
                        ? 'bg-silver-accent text-silver-bright border-silver-accent hover:bg-silver-accent-light' 
                        : 'border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright'
                    }`}
                  >
                    <Heart className={`w-4 h-4 mr-2 inline ${favorites.includes(ring.id) ? 'fill-current' : ''}`} />
                    {favorites.includes(ring.id) ? 'В избранном' : 'В избранное'}
                  </button>
                  <button
                    onClick={() => onAddToCart(ring)}
                    className="flex-1 bg-silver-accent hover:bg-silver-accent-light text-silver-bright transition-all duration-300 px-4 py-2 rounded-md"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2 inline" />
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <div className="text-silver-shadow text-sm mb-4">
            Показаны все доступные модели
          </div>
          <button 
            onClick={() => onNavigate('about')}
            className="border border-steel-dark text-silver-dim hover:bg-steel-dark hover:text-silver-bright px-8 py-3 tracking-wide transition-all duration-300 rounded-md"
          >
            Узнать о новых коллекциях
          </button>
        </div>
      </div>
    </div>
  );
}