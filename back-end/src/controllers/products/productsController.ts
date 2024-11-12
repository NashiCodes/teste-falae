import {productsService} from "@/services/products/productsServices";
import {Request, Response} from "express";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productsService.getAllProducts();
        res.status(200).json(products);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

export const productsController = {
    getAllProducts
}