import { Router } from "express";
import { createPatrController, deletePatrController, getPatrController, updatePatrController } from "../controller/patr.controller";

const patrRouter = Router();

patrRouter.get("/:patrId", getPatrController);
patrRouter.post("/", createPatrController);  // dont need any media query
patrRouter.delete("/:patrId", deletePatrController);
patrRouter.put("/", updatePatrController);

export default patrRouter