import { Document } from "mongoose";

export interface IPatrInterface extends Document{
    patrId: string, 
    content: string, 
    createdAt: string, 
    adminId: string
}