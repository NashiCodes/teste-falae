import {Router} from "express";
import {productsController} from "@/controllers/products/productsController";

const productsRoutes = Router({mergeParams: true});

productsRoutes.get("/", productsController.getAllProducts);

productsRoutes.get("/:id", productsController.getProductById);

productsRoutes.post("/", productsController.createProduct);

productsRoutes.put("/:id", productsController.updateProduct);

productsRoutes.delete("/:id", productsController.deleteProduct);


export default productsRoutes;