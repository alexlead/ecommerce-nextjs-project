import { create } from 'zustand';
import { Product, CartItem } from '@/types/product';

interface CartStore {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
    items: [],

    addToCart: (product) => set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);

        if (existingItem) {

            return {
                items: state.items.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }

        return { items: [...state.items, { ...product, quantity: 1 }] };
    }),

    decreaseQuantity: (id) => set((state) => ({
        items: state.items.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ),
    })),

    removeFromCart: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id),
    })),

    clearCart: () => set({ items: [] }),
}));