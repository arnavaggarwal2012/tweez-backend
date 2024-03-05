import { Document } from "mongoose";

export interface IUserInterface extends Document{
    uid: string, 
    patrs: string[],
    firstName: string, 
    lastName: string, 
    email: string,
    createdAt: string
}