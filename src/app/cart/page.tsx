'use client';

import { useCart } from '@/store/useCart';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const { items, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();


    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <ShoppingBag className="mx-auto h-16 w-16 text-slate-300 mb-4" />
                <h2 className="text-2xl font-bold text-slate-800">Cart is empty</h2>
                <p className="text-slate-500 mb-8">It looks like your cart is empty. Start shopping to add items to your cart!</p>
                <Link href="/products" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                    Back to shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Ваша корзина</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="relative h-20 w-20 flex-shrink-0">
                                <Image src={item.thumbnail} alt={item.title} fill className="object-contain" />
                            </div>

                            <div className="ml-4 flex-grow">
                                <h3 className="font-bold text-slate-900">{item.title}</h3>
                                <p className="text-indigo-600 font-bold">${item.price}</p>
                            </div>

                            {/* Manage Quantity */}
                            <div className="flex items-center gap-3 mr-8 bg-slate-50 rounded-lg p-1">
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="p-1 hover:bg-white rounded shadow-sm transition-all"
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="p-1 hover:bg-white rounded shadow-sm transition-all"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                    {/* ... Clear cart button */}
                    <button
                        onClick={clearCart}
                        className="w-full mt-4 bg-slate-100 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                    >
                        Clear cart
                    </button>
                </div>

                {/* Totals  */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit">
                    <h2 className="text-xl font-bold mb-4">Детали заказа</h2>
                    <div className="flex justify-between mb-2 text-slate-500">
                        <span>Всего товаров</span>
                        {/* Count total items */}
                        <span>{items.reduce((acc, item) => acc + item.quantity, 0)} шт.</span>
                    </div>
                    <div className="border-t border-slate-100 my-4 pt-4 flex justify-between">
                        <span className="text-lg font-bold">Итого</span>
                        <span className="text-xl font-black text-indigo-600">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-transform active:scale-[0.98]">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}