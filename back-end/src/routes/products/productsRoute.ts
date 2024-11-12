import {Router} from "express";
import {productsController} from "@/controllers/products/productsController";

const productsRoute = Router({mergeParams: true});

productsRoute.get("/", productsController.getAllProducts);


export default productsRoute;