import Image from 'next/image';
import { Product, DummyJsonResponse } from '@/types/product';
import { AddToCartButton } from '@/components/products/AddToCartButton';
import Link from 'next/link';

async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://dummyjson.com/products?limit=12');
    if (!res.ok) throw new Error('Failed to fetch products');

    const data: DummyJsonResponse = await res.json();
    return data.products; // Берем массив из ключа products
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-slate-800">Catalog</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                        {/* Image */}
                        <div className="relative h-48 w-full bg-slate-50">
                            <Link href={`/products/${product.id}`}>
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                            </Link>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
                                    {product.category}
                                </span>
                                <span className="text-xs font-medium text-amber-500">
                                    ★ {product.rating}
                                </span>
                            </div>
                            <Link href={`/products/${product.id}`}>
                                <h3 className="font-bold text-slate-900 mb-2 line-clamp-1">
                                    {product.title}
                                </h3>

                                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                            </Link>

                            <div className="mt-auto flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-slate-900">${product.price}</span>
                                </div>
                                <AddToCartButton product={product} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}