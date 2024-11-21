export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    imageUrl?: string;
}

export interface ProductRegister {
    name: string;
    price: number;
    category: string;
    description: string;
    imageUrl?: string;
}