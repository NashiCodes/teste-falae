import {Router} from "express";
import {ordersController} from "@/controllers/orders/ordersController";

const OrdersRoutes = Router({mergeParams: true});

OrdersRoutes.post("/", ordersController.createOrder);
OrdersRoutes.put("/:id", ordersController.updateOrder);
OrdersRoutes.get("/:id", ordersController.getOrderById);
OrdersRoutes.delete("/:id", ordersController.deleteOrder);


export default OrdersRoutes;