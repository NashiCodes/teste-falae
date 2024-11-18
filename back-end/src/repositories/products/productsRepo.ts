import db from "@/prisma/client";
import {Product} from "@prisma/client";
import {ProductDtoRequest} from "@/models/product/productDto";

const getAllProducts = async (): Promise<Product[]> => {
    return db.product.findMany();
}


const createProduct = async (productRequest: ProductDtoRequest): Promise<Product> => {
    return db.product.create({
        data: productRequest
    });
}

const getProductById = async (id: string): Promise<Product> => {
    const product = await db.product.findUnique({
        where: {id}
    });

    if (!product) throw new Error('Product not found');

    return product;
}

const updateProduct = async (id: string, productRequest: ProductDtoRequest): Promise<Product> => {

    try {
        return db.product.update({
            where: {id},
            data: productRequest
        });
    } catch (e) {
        throw new Error('Product not found');
    }
}

const deleteProduct = async (id: string) => {
    try {
        await db.product.delete({
            where: {id}
        });
    } catch (e) {
        throw new Error('Product not found');
    }
}

export const productRepo = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}