import {Product, ProductRegister} from "@/lib/types.ts";
import {productsRepo} from "@/repository/productsRepo.ts";

export const fetchProducts = async () => {
    return await productsRepo.getAllProducts();
}

export const createProduct = async (product: ProductRegister): Promise<Product> => {
    return await productsRepo.createProduct(product)

}