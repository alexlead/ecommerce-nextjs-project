import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { AddToCartButton } from '@/components/products/AddToCartButton';
import { Product } from '@/types/product';

type Props = {
    params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        return null;
    }
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">

                {/* {Breadcrumbs / Navigation} */}
                <Link
                    href="/products"
                    className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-8 transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to catalog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* GALLERY */}
                    <div className="space-y-4">
                        <div className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                fill
                                priority
                                className="object-contain p-8"
                            />
                        </div>
                        {/* Additional images */}
                        <div className="grid grid-cols-4 gap-4">
                            {product.images?.slice(0, 4).map((img, idx) => (
                                <div key={idx} className="relative aspect-square rounded-xl bg-slate-50 border border-slate-100 overflow-hidden cursor-pointer hover:border-indigo-300 transition-colors">
                                    <Image src={img} alt={product.title} fill className="object-cover p-2" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*INFO */}
                    <div className="flex flex-col">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {product.category}
                                </span>
                                <div className="flex items-center gap-1 text-amber-500 font-bold">
                                    <Star className="h-4 w-4 fill-current" />
                                    {product.rating}
                                </div>
                            </div>
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
                                {product.title}
                            </h1>
                            <p className="text-xl text-slate-400 font-medium">Brand: {product.category}</p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                            <div className="flex items-baseline gap-4 mb-2">
                                <span className="text-4xl font-black text-slate-900">${product.price}</span>
                                <span className="text-xl text-slate-400 line-through">
                                    ${(product.price * 1.15).toFixed(2)}
                                </span>
                            </div>
                            <p className="text-emerald-600 text-sm font-bold">In stock (5 units left)</p>
                        </div>

                        <div className="prose prose-slate mb-8">
                            <h3 className="text-lg font-bold mb-2">Description</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Add To Cart Button */}
                        <div className="mb-10">
                            <AddToCartButton product={product} fullWidth={true} />
                        </div>

                        {/* Advantages */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Truck className="h-5 w-5 text-indigo-600" />
                                </div>
                                Express Delivery
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <RotateCcw className="h-5 w-5 text-indigo-600" />
                                </div>
                                30 days return
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <ShieldCheck className="h-5 w-5 text-indigo-600" />
                                </div>
                                Original product
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}