import mongoose from "mongoose";
const Schema = mongoose.Schema;

const carSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        rate: { type: Number, min: 1, max: 10, default: 5 },
        description: { type: String, required: true },
        year: { type: Number, required: true },
        active: { type: Boolean, default: true },

    },
);
const car = mongoose.model("car", carSchema);
export default car;