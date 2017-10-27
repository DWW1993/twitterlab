import { Injectable } from '@angular/core';
import { TweetInfo } from './tweetInterface'
import { TWEETS } from './tweetList'

@Injectable() 
export class TweetService {
    getTweets(): Promise<TweetInfo[]> {
        return Promise.resolve(TWEETS);
    }

    getTweet(id: number): Promise<TweetInfo> {
        return this.getTweets()
        .then(tweets => tweets.find(tweet => tweet.id === id));
    }

    getNewest(index: any): Promise<TweetInfo> {
        return this.getTweets()
        .then(tweets => tweets.find(tweet => tweet[0] === [0]));
    }
}