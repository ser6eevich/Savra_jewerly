import { Product } from './types';

export const rings: Product[] = [
  {
    id: '1',
    name: 'Кольцо Классик',
    description: 'Элегантное серебро с полированной поверхностью',
    detailedDescription: 'Это уникальное кольцо создано в технике имитации природного выветривания. Каждая неровность и текстура тщательно проработана вручную, создавая ощущение камня, отшлифованного временем и стихией.',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Природные Формы',
    article: 'SVR-001-CLS',
    material: 'Серебро 925°, полированное покрытие',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '2',
    name: 'Кольцо Минимал',
    description: 'Тонкое серебряное кольцо простой формы',
    detailedDescription: 'Минималистичный дизайн, воплощающий философию простоты и элегантности. Тонкие линии и безупречная полировка создают утонченный образ.',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Минимализм',
    article: 'SVR-002-MIN',
    material: 'Серебро 925°, матовое покрытие',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '3',
    name: 'Кольцо Элегант',
    description: 'Классическое серебро с глянцевой отделкой',
    detailedDescription: 'Воплощение классической элегантности в современном исполнении. Глянцевая поверхность отражает свет, создавая игру бликов.',
    price: 9200,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic',
    collection: 'Классика',
    article: 'SVR-003-ELG',
    material: 'Серебро 925°, глянцевая полировка',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '4',
    name: 'Кольцо Эрозии',
    description: 'Серебро с выветренной текстурой камня',
    detailedDescription: 'Это уникальное кольцо создано в технике имитации природного выветривания. Каждая неровность и текстура тщательно проработана вручную.',
    price: 10250,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured',
    collection: 'Природные Формы',
    article: 'SVR-004-ERO',
    material: 'Серебро 925°, текстурированная поверхность',
    sizes: ['15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: '5',
    name: 'Кольцо Силы',
    description: 'Широкое классическое серебро для мужчин',
    detailedDescription: 'Мужественный дизайн с акцентом на силу и надежность. Широкая форма подчеркивает характер владельца.',
    price: 15200,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'classic_mens',
    collection: 'Мужская Классика',
    article: 'SVR-005-SIL',
    material: 'Серебро 925°, усиленная конструкция',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  },
  {
    id: '6',
    name: 'Кольцо Воин',
    description: 'Боевая текстура на широком серебре',
    detailedDescription: 'Грубая текстура, напоминающая о древних воинах. Каждая царапина и неровность рассказывает свою историю.',
    price: 19200,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&crop=center&auto=format&q=80',
    category: 'rings',
    type: 'textured_mens',
    collection: 'Воинская Доблесть',
    article: 'SVR-006-VOI',
    material: 'Серебро 925°, боевая текстура',
    sizes: ['18', '19', '20', '21', '22', '23', '24']
  }
];

export const categoryNames: Record<string, string> = {
  all: 'Все',
  classic: 'Классические',
  textured: 'Текстурные',
  mens: 'Мужские размеры'
};

export const getRingsByCategory = (category: string) => {
  switch (category) {
    case 'classic':
      return rings.filter(ring => ring.type === 'classic' || ring.type === 'classic_mens');
    case 'textured':
      return rings.filter(ring => ring.type === 'textured' || ring.type === 'textured_mens');
    case 'mens':
      return rings.filter(ring => ring.type === 'classic_mens' || ring.type === 'textured_mens');
    default:
      return rings;
  }
};

export const getRingById = (id: string): Product | undefined => {
  return rings.find(ring => ring.id === id);
};