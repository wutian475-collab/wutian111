export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  deliveryTime: string;
  icon: 'cpu' | 'video' | 'users' | 'bar-chart';
}

export interface Product {
  id: string;
  title: string;
  category: 'operation' | 'visual' | 'ai-agent';
  description: string;
  imageUrl: string;
}

export interface FormData {
  name: string;
  contact: string;
  projectType: string;
  budget: string;
  description: string;
}

export type Category = 'all' | 'operation' | 'visual' | 'ai-agent';