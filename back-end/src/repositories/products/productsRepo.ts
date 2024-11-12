import db from "@/prisma/client";
import {Product} from "@prisma/client";

const getAllProducts = async (): Promise<Product[]> => {
    return db.product.findMany();
}


export const productRepo = {
    getAllProducts
}