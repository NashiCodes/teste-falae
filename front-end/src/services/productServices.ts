import {Product, ProductRegister} from "@/lib/types.ts";

export const fetchProducts = async () => {
    return await fetch('http://localhost:5000/api/products/').then(data => data.json() as unknown as Product[])
}

export const createProduct = async (product: ProductRegister): Promise<Product> => {
    const response = await fetch('http://localhost:5000/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })

    const data = await response.json();

    if (response.ok)
        return data.product;

    throw new Error(data.message)

}