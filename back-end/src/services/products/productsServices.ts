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
    if (productRequest.description === '' || !productRequest.description) throw new Error('Description is required');

    return productRepo.createProduct(productRequest);
}

const getProductById = async (id: string) => {
    const product = await productRepo.getProductById(id);

    if (!product) throw new Error('Product not found');

    return product;
}

const updateProduct = async (id: string, productRequest: ProductDtoRequest) => {
    const productUpdated = await productRepo.updateProduct(id, productRequest);

    if (!productUpdated) throw new Error('Product not found');

    return productUpdated;
}

const deleteProduct = async (id: string) => {
    const productDeleted = await productRepo.deleteProduct(id);

    if (!productDeleted) throw new Error('Product not found');
}


export const productsService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}