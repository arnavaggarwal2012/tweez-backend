import { Router } from "express";
import { createTweetController, deleteTweetController, getTweetController, updateTweetController } from "../controller/tweet.controller";

const tweetRouter = Router();

tweetRouter.get("/:tweetId", getTweetController);
tweetRouter.post("/", createTweetController);  // dont need any media query
tweetRouter.delete("/:tweetId", deleteTweetController);
tweetRouter.put("/", updateTweetController);

export default tweetRouter