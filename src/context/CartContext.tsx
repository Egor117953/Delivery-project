'use client';
import React, { createContext, useContext, useState } from 'react';
import { Dish } from '@/types/Dish';

interface CartItem extends Dish {
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (dish: Dish) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (dish: Dish) => {
    setCart(prev =>
      prev.find(item => item.id === dish.id)
        ? prev.map(item =>
            item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prev, { ...dish, quantity: 1 }]
    );
  };

  const removeFromCart = (id: number) =>
    setCart(prev => prev.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};
