'use client';

import Link from 'next/link';
import { ShoppingCart, PawPrint } from 'lucide-react';
import { useCart } from '@/store/useCart';

export const Header = () => {
    const cartCount = useCart((state) => state.items.length);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                    <PawPrint className="h-6 w-6" />
                    <span>Beauty Shop</span>
                </Link>

                {/* Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-indigo-600">
                        Home
                    </Link>
                    <Link href="/products" className="transition-colors hover:text-indigo-600">
                        Products
                    </Link>
                    <Link href="/contacts" className="transition-colors hover:text-indigo-600">
                        Contacts
                    </Link>
                </nav>

                {/* Cart */}
                <Link href="/cart" className="relative p-2 transition-colors hover:bg-gray-100 rounded-full">
                    <ShoppingCart className="h-6 w-6 text-gray-700" />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
};