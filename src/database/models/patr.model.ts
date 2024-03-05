import mongoose, {Schema} from "mongoose";
import { IPatrInterface } from "../interface/patr.interface";

const patrSchema = new Schema<IPatrInterface>({
    patrId: { type: String, required: true },
    adminId: { type: String, required: true },
    content: { type: String, default: "" },
    createdAt: { type: String, required: true },
})

const patrModel = mongoose.model<IPatrInterface>('patrModel',patrSchema);
export default patrModel;