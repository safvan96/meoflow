"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, Product } from "@/types";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  exchangeRate: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "meoflow-cart";
const RATE_STORAGE_KEY = "meoflow-exchange-rate";
const BASE_RATE = 38.5; // Base TRY/USD rate
const DAILY_INCREMENT = 0.015; // %1.5 daily increase simulation

function calculateExchangeRate(): number {
  const startDate = new Date("2026-01-01").getTime();
  const now = Date.now();
  const daysSinceStart = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  return parseFloat((BASE_RATE * Math.pow(1 + DAILY_INCREMENT / 30, daysSinceStart)).toFixed(2));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [exchangeRate, setExchangeRate] = useState(BASE_RATE);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {}
    }
    const storedRate = localStorage.getItem(RATE_STORAGE_KEY);
    const lastUpdate = localStorage.getItem("meoflow-rate-date");
    const today = new Date().toDateString();

    if (storedRate && lastUpdate === today) {
      setExchangeRate(parseFloat(storedRate));
    } else {
      const rate = calculateExchangeRate();
      setExchangeRate(rate);
      localStorage.setItem(RATE_STORAGE_KEY, rate.toString());
      localStorage.setItem("meoflow-rate-date", today);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.basePrice * exchangeRate * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        exchangeRate,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
