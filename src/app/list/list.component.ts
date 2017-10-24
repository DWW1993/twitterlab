import { Component, OnInit } from '@angular/core';
import { TweetInfo } from '../tweetInterface'
import { TWEETS } from '../tweetList'
import { TweetService } from '../tweet.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class Tweet implements OnInit {
  tweets: TweetInfo[];
  
  constructor(private tweetService: TweetService) { }
  getTweets(): void {
    this.tweetService.getTweets()
      .then(tweets => this.tweets = tweets);
  }
  ngOnInit() {
    this.getTweets();
  }

}