import express from "express";
import userRoute from "@/routes/user/userRoute";
import ProductRoute from "@/routes/products/productsRoute";

const routes = express.Router({mergeParams: true});


routes.get("/", (req, res) => {
    res.send("Hello, World!");
});

routes.use("/auth", userRoute);

routes.use("/products", ProductRoute);


export default routes;