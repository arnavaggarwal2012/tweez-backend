import { IPatrInterface } from "../database/interface/patr.interface";
import patrModel from "../database/models/patr.model";
import userModel from "../database/models/user.model";
import mongoose from "mongoose";


export const getPatrRepo = async(patrId:string): Promise<IPatrInterface | null> =>{
    try{
        const patr = await patrModel.findOne({patrId:patrId});
        return patr;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}

export const getAllPatrRepo = async (): Promise<any[] | null> => {
    try {
        const allPatr = await patrModel.find();
        if (!allPatr || allPatr.length == 0) {
            return null;
            }
            const patrWithUserInfo = await Promise.all(
        allPatr.map(async (patrs) => {
        const admin = await userModel.findOne({ uid: patrs.adminId });
        if (!admin) {
          return { patrs, admin: null };
        }
        return { patrs, admin };
      })
    );
    return patrWithUserInfo;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const deletePatrRepo = async(patrId:string): Promise<boolean> =>{
    try{
        const deleted = await patrModel.findOneAndDelete({patrId:patrId});
        if(deleted){
            return true;
        }
        else{
            return false;
        }
    }
    catch(error) {
        console.error(error);
        return false;
    }
}

export const createPatrRepo = async(patr:IPatrInterface): Promise<boolean> =>{
    try{
        const create = await patrModel.create(patr);
        if(create){
            return true;
        }
        else{
            return false;
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
}

export const updatePatrRepo = async(updatedPatr:IPatrInterface, patrId:string): Promise<boolean> =>{
    try{
        const update = await patrModel.findOneAndUpdate({patrId:patrId} , updatedPatr , { new: true});
        if(update){
            return true;
        }
        else{
            return false;
        }
    }
    catch(error){
        console.log(error)
        return false;
    }
}










