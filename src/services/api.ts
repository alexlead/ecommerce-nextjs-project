import { Product } from "@/types/product";

const BASE_URL = 'https://dummyjson.com/products';

export const getProducts = async (quantity: number = 10): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}?_quantity=${quantity}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const json = await response.json();
    return json.data;
};