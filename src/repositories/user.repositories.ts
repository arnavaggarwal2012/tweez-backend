import { IUserInterface } from "../database/interface/user.interface";
import userModel from "../database/models/user.model";

export const getUserRepo = async(userId:string): Promise<IUserInterface | null> =>{
    try{
        const user = await userModel.findOne({uid:userId});
        return user;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}

export const deleteUserRepo = async(userId:string): Promise<boolean> =>{
    try{
        const deleted = await userModel.findOneAndDelete({uid:userId});
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

export const createUserRepo = async(user:IUserInterface): Promise<boolean> =>{
    try{
        const create = await userModel.create(user);
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

export const updateUserRepo = async(updatedUser:IUserInterface, userId:string): Promise<boolean> =>{
    try{
        const update = await userModel.findOneAndUpdate({uid:userId} , updatedUser , { new: true});
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

export const updateUserWithTweetIdRepo = async (
  userId: string,
  tweetId: string
): Promise<boolean> => {
  try {
    const result = await userModel.findOneAndUpdate(
      { uid: userId },
      { $push: { tweets: tweetId } }
    );
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};








