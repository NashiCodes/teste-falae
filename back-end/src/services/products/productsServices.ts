import {productRepo} from "@/repositories/products/productsRepo";

const getAllProducts = async () => {
    return productRepo.getAllProducts();
}


export const productsService = {
    getAllProducts
}