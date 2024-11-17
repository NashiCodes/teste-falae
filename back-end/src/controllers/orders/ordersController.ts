import {OrderDtoRequest} from "@/models/orders/ordersDto";
import {Request, Response} from "express";
import {ordersService} from "@/services/orders/ordersService";

const createOrder = async (req: Request, res: Response) => {
    try {
        const order: OrderDtoRequest = req.body;
        await ordersService.createOrder(order);
        res.status(201).json({message: 'Order created successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }

}

const updateOrder = async (req: Request, res: Response) => {
    try {
        const orderId: string = req.params.id;
        const status: string = req.body.status;
        await ordersService.updateOrder(orderId, status);
        res.status(200).json({message: 'Order updated successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }

}

const getOrderById = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id;
        const order = await ordersService.getOrderById(orderId);
        res.status(200).json(order);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }

}

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id;
        await ordersService.deleteOrder(orderId);
        res.status(200).json({message: 'Order deleted successfully'});
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }

}

export const ordersController = {
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder
}