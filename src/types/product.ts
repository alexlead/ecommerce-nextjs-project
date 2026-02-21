export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string; // Основное превью
    images: string[];  // Массив всех фото
    rating: number;
}

export interface DummyJsonResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface CartItem extends Product {
    quantity: number;
}