import express from "express";
import CarsController from "../controllers/cars.js";

const carsRouter = express.Router();
const controller = new CarsController();

carsRouter.get("/", controller.getAllCars);
carsRouter.get("/:id", controller.GETDetailCar);
carsRouter.post("/", controller.CreateCar);
carsRouter.put("/:id", controller.UpdateCar);
carsRouter.delete("/:id", controller.DELETECar);

export default carsRouter;
