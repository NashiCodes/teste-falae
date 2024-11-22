import {Product, ProductRegister} from "@/lib/types.ts";

const getAllProducts = async () => {
    return await fetch('http://localhost:5000/api/products/').then(async data => {
        localStorage.setItem('products', JSON.stringify(await data.json()));
    })
}

const createProduct = async (product: ProductRegister): Promise<Product> => {
    const response = await fetch('http://localhost:5000/api/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })

    const data = await response.json();

    if (response.ok) {
        const products = JSON.parse(localStorage.getItem('products') || '[]') as Product[];
        const product = await data.json() as Product;
        products.push(product);
        return product;
    }

    throw new Error(data.message)

}

export const productsRepo = {
    getAllProducts,
    createProduct
}