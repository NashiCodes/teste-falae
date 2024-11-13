import {Router} from "express";
import {ordersController} from "@/controllers/orders/ordersController";

const OrdersRoutes = Router({mergeParams: true});

OrdersRoutes.post("/", ordersController.createOrder);


export default OrdersRoutes;