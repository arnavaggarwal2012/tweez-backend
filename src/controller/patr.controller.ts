import { Request, Response } from "express"
import { createPatrRepo, deletePatrRepo, getPatrRepo, updatePatrRepo } from "../repositories/patr.repositories";
import { IPatrInterface } from "../database/interface/patr.interface";
import { updateUserWithPatrIdRepo } from "../repositories/user.repositories";

export const getPatrController = async (req: Request, res: Response) => {
    const patrId = req.params.patrId as string;
    try {
        const patr = await getPatrRepo(patrId);
        if(patr){
            res.status(200).json({"data" : patr});
        }
        else{ 
            res.status(400).json({"error" : "Patr Not Found"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({"error" : error});
    }
};

export const createPatrController = async (req: Request, res: Response) => {
    const patr : IPatrInterface = req.body;
    try {
        const success = await createPatrRepo(patr);
        if(success){
            const updateUserSuccess = await updateUserWithPatrIdRepo(
                patr.adminId,
                patr.patrId
            ) 
            if(updateUserSuccess){
                res.status(200).json({"data" : patr});
            }
            else{
                res.status(400).json({"error" : "Patr Not Updated"});
            }
        }
        else{ 
            res.status(400).json({"error" : "Patr Not Created"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({"error" : error});
    }
};

export const updatePatrController = async (req: Request, res: Response) => {
    const updatedPatr : IPatrInterface = req.body;
  
    try {
      const success = await updatePatrRepo(updatedPatr,updatedPatr.patrId);
      if (success) {
        res.status(200).json({ data: "Patr Updated" });
      } else {
        res.status(500).json({ error: "Patr Not Updated" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  };
export const deletePatrController = async (req: Request, res: Response) => {
    const patrId = req.params.patrId as string;
    try {
        const patr = await deletePatrRepo(patrId);
        if(patr){
            res.status(200).json({"data" : "Patr Deleted"});
        }
        else{ 
            res.status(400).json({"error" : "Patr Not Deleted"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({"error" : error});
    }
};