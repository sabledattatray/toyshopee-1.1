export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  stock: number;
  ageRecommendation: string;
  brand: string;
  features: string[];
  specifications: Record<string, string>;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewsCount: number;
}

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  role: 'customer' | 'admin';
  loyaltyPoints: number;
  addresses: Address[];
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  pincode: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
