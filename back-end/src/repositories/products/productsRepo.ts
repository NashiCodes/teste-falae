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

const getProductById = async (id: string): Promise<Product | null> => {
    return db.product.findUnique({
        where: {id}
    });
}

const updateProduct = async (id: string, productRequest: ProductDtoRequest): Promise<Product> => {
    return db.product.update({
        where: {id},
        data: productRequest
    });
}

const deleteProduct = async (id: string): Promise<Product> => {
    return db.product.delete({
        where: {id}
    });
}

export const productRepo = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}