import mongoose, { mongo } from "mongoose";

const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String
    },
    subSection: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubSection",
            required: true
        }
    ]
})
export default mongoose.model("Section", sectionSchema)