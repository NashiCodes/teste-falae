import express from "express";
import userRoutes from "@/routes/user/userRoutes";
import ProductsRoutes from "@/routes/products/productsRoutes";
import OrdersRoutes from "@/routes/orders/ordersRoutes";

const routes = express.Router({mergeParams: true});


routes.get("/", (req, res) => {
    res.send("Hello, World!");
});

routes.use("/auth", userRoutes);

routes.use("/products", ProductsRoutes);

routes.use("/orders", OrdersRoutes);


export default routes;