import express from "express";
import userRoute from "@/routes/User/userRoute";

const routes = express.Router({mergeParams: true});

routes.get("/", (req, res) => {
  res.send("Hello, World!");
});

routes.use("/users", userRoute);


export default routes;