import { Router } from "express";
import { createPatrController, deletePatrController, getPatrController, updatePatrController,getAllPatrController} from "../controller/patr.controller";

const patrRouter = Router();

patrRouter.get("/:patrId", getPatrController);
patrRouter.get("/get/all", getAllPatrController);
patrRouter.post("/", createPatrController);  // dont need any media query
patrRouter.delete("/:patrId", deletePatrController);
patrRouter.put("/", updatePatrController);

export default patrRouter