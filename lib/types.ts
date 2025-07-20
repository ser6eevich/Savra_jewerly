export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  type: 'classic' | 'textured' | 'mens' | 'classic_mens' | 'textured_mens';
  collection: string;
  article: string;
  material: string;
  detailedDescription: string;
  sizes: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export type RingCategory = 'classic' | 'textured' | 'mens';

export interface RingConstructorState {
  selectedCategory: RingCategory | null;
  selectedRing: Product | null;
  selectedSize: string | null;
  isOrderModalOpen: boolean;
}