import {OrdersDtoRequest} from "@/models/orders/ordersDto";
import {Request, Response} from "express";
import {ordersService} from "@/services/orders/ordersService";

const createOrder = async (req: Request, res: Response) => {
    try {
        const order: OrdersDtoRequest = req.body;
        await ordersService.createOrder(order);
        res.status(201).json({message: 'Order created successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
}

export const ordersController = {
    createOrder
}