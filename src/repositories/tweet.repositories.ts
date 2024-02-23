import { ITweetInterface } from "../database/interface/tweet.interface";
import tweetModel from "../database/models/tweet.model";

export const getTweetRepo = async(tweetId:string): Promise<ITweetInterface | null> =>{
    try{
        const tweet = await tweetModel.findOne({tweetId:tweetId});
        return tweet;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}

export const deleteTweetRepo = async(tweetId:string): Promise<boolean> =>{
    try{
        const deleted = await tweetModel.findOneAndDelete({tweetId:tweetId});
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

export const createTweetRepo = async(tweet:ITweetInterface): Promise<boolean> =>{
    try{
        const create = await tweetModel.create(tweet);
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

export const updateTweetRepo = async(updatedTweet:ITweetInterface, tweetId:string): Promise<boolean> =>{
    try{
        const update = await tweetModel.findOneAndUpdate({tweetId:tweetId} , updatedTweet , { new: true});
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










