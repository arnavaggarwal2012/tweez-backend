"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controller/tweet.controller");
const tweetRouter = (0, express_1.Router)();
tweetRouter.get("/:tweetId", tweet_controller_1.getTweetController);
tweetRouter.post("/", tweet_controller_1.createTweetController); // dont need any media query
tweetRouter.delete("/:tweetId", tweet_controller_1.deleteTweetController);
tweetRouter.put("/", tweet_controller_1.updateTweetController);
exports.default = tweetRouter;
