export type Client = {
    id: string,
    name: string,
    email: string,
    address: string,
    phone?: string,
}

export type clientResgister = {
    name: string,
    email: string,
    address: string,
    phone?: string,
}

export type OrderItem = {
    name: string;
    quantity: number;
    price: number;
}

export type Order = {
    id: string,
    totalPrice: number,
    status: string,
    createdAt: string,
    orderItem: OrderItem[]
}

export type OrderRegister = {
    userId: string,
    OrderItem: Array<OrderItemRegister>
}

export type OrderItemRegister = {
    productId: string;
    quantity: number;
}

export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    imageUrl?: string;
    quantity?: number;
}

export type ProductRegister = {
    name: string;
    price: number;
    category: string;
    description: string;
    imageUrl?: string;
}

export type toLabels = {
    name: string,
    label: string,
    placeholder: string
}