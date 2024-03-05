import { IPatrInterface } from "../database/interface/patr.interface";
import patrModel from "../database/models/patr.model";

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










