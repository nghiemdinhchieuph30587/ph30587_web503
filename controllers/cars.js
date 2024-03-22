import car from "../models/carmodel.js";
class carsController {
    async getAllCars(req, res) {
        try {
            const cars = await car.find();
            res.status(200).json({
                message: " GET OK",
                data: cars,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,

            })

        }
    }
    async GETDetailCar(req, res) {
        try {
            const newcar = await car.findById(req.params.id);
            if (!newcar) {
                return res.status(404).json({
                    message: " car not found",
                });
            }
            res.status(200).json({
                message: "get car detail done",
                data: newcar,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });

        }
    }
    async CreateCar(req, res) {
        try {
            const createcar = await car.create(req.body);
            res.status(200).json({
                message: "get car detail done",
                data: createcar,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });

        }
    }


    async UpdateCar(req, res) {
        try {
            const updatecar = await car.findByIdAndUpdate(req.params.id, res.body, { new: true });
            if (!updatecar) {
                return res.status(404).json({
                    message: " car not found",
                });
            }
            res.status(200).json({
                message: "update car detail done",
                data: updatecar,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });

        }

    }

    async DELETECar(req, res) {
        try {
            const deletecar = await car.findByIdAndDelete(req.params.id, res.body, { new: true });
            if (!deletecar) {
                return res.status(404).json({
                    message: " car not found",
                });
            }
            res.status(200).json({
                message: "update car detail done",
                data: deletecar,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default carsController;