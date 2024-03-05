import { Router } from "express";
import helloRouter from "./hello.routes";
import userRouter from "./user.routes";
import patrRouter from "./patr.routes";


const router = Router();

router.use('/hello', helloRouter);
router.use('/user', userRouter);
router.use('/patr', patrRouter);


export default router