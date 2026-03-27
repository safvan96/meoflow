export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  specs: Record<string, string>;
  basePrice: number; // USD base price
  image: string;
  images: string[];
  inStock: boolean;
  badge?: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
}
