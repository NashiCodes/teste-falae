import {productRepo} from "@/repositories/products/productsRepo";
import {ProductDtoRequest} from "@/models/product/productDto";

const getAllProducts = async () => {
    return productRepo.getAllProducts();
}


const createProduct = async (productRequest: ProductDtoRequest) => {

    if (productRequest.name === '' || !productRequest.name) throw new Error('Name is required');
    if (productRequest.price === undefined) throw new Error('Price is required');
    if (productRequest.price <= 0) throw new Error('Price must be greater than 0');
    if (productRequest.category === '' || !productRequest.category) throw new Error('Category is required');

    return productRepo.createProduct(productRequest);
}

const getProductById = async (id: string) => {
    return await productRepo.getProductById(id);
}

const updateProduct = async (id: string, productRequest: ProductDtoRequest) => {
    return await productRepo.updateProduct(id, productRequest);
}

const deleteProduct = async (id: string) => {
    return await productRepo.deleteProduct(id);
}


export const productsService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}