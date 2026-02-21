import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag, Zap } from 'lucide-react';
import { Product, DummyJsonResponse } from '@/types/product';
import { AddToCartButton } from '@/components/products/AddToCartButton';

async function getHomeData() {

  const res = await fetch('https://dummyjson.com/products?limit=4');
  if (!res.ok) throw new Error('Failed to fetch home data');
  const data: DummyJsonResponse = await res.json();

  return {
    heroProduct: data.products[0],
    featuredProducts: data.products.slice(1, 4)
  };
}

export default async function HomePage() {
  const { heroProduct, featuredProducts } = await getHomeData();

  return (
    <div className="flex flex-col gap-16 pb-16">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 py-16 lg:py-24 text-white">
        {/* Deco background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium">
              <Zap className="h-4 w-4 fill-current" />
              <span>The main offer of the week</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              {heroProduct.title}
            </h1>

            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              {heroProduct.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/products/${heroProduct.id}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                Read more
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="w-48">
                <AddToCartButton product={heroProduct} fullWidth />
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full animate-pulse" />
            <Image
              src={heroProduct.thumbnail}
              alt={heroProduct.title}
              width={500}
              height={500}
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS SECTION */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-slate-500 mt-2">Best products according to our customers</p>
          </div>
          <Link
            href="/products"
            className="text-indigo-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full mb-6 bg-slate-50 rounded-2xl overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center text-amber-500 text-sm font-bold">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  {product.rating}
                </div>
              </div>

              <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                {product.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">${product.price}</span>
                <AddToCartButton product={product} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="container mx-auto px-4">
        <div className="bg-indigo-600 rounded-[32px] p-8 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4">Ready to upgrade your gadgets?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              In our catalog there are more than 100 products with the best price guarantee and free shipping throughout the country.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              Go to catalog
            </Link>
          </div>
          {/* Decor */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}