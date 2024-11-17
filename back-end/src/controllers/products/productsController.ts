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

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        const newProduct = await productsService.createProduct(product);
        res.status(201).json({message: 'Product ' + product.name + ' created successfully', product: newProduct});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product = await productsService.getProductById(id);
        res.status(200).json(product);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product = req.body;
        await productsService.updateProduct(id, product);
        res.status(200).json({message: 'Product updated successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await productsService.deleteProduct(id);
        res.status(200).json({message: 'Product deleted successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

export const productsController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}