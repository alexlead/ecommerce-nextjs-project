'use client';

import { useCart } from '@/store/useCart';
import { Product } from '@/types/product';
import { ShoppingCart } from 'lucide-react';

interface Props {
    product: Product;
    fullWidth?: boolean;
}

export const AddToCartButton = ({ product, fullWidth = false }: Props) => {
    const addToCart = useCart((state) => state.addToCart);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                addToCart(product);
            }}
            className={`
        flex items-center justify-center gap-3 font-bold transition-all active:scale-[0.97]
        ${fullWidth
                    ? 'w-full py-4 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-lg shadow-lg shadow-indigo-100'
                    : 'p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl'}
      `}
        >
            <ShoppingCart className={fullWidth ? "h-6 w-6" : "h-5 w-5"} />
            {fullWidth && "Add to Cart"}
        </button>
    );
};