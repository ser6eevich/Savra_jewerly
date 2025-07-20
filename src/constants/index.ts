// Константы приложения
export const APP_CONFIG = {
  name: 'Savra Jewelry',
  description: 'Украшения ручной работы из серебра',
  version: '1.0.0',
  author: 'Savra Jewelry Team'
} as const;

export const ROUTES = {
  HOME: 'home',
  CATALOG: 'catalog',
  PRODUCT: 'product',
  ABOUT: 'about',
  CART: 'cart',
  FAVORITES: 'favorites',
  PROFILE: 'profile',
  CONSTRUCTOR: 'constructor',
  NOT_FOUND: '404'
} as const;

export const STORAGE_KEYS = {
  CART: 'savra_cart',
  FAVORITES: 'savra_favorites',
  USER: 'savra_user',
  THEME: 'savra_theme'
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;