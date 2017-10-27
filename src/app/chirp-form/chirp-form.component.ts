import { Component, OnInit, Input } from '@angular/core';
import { TweetInfo } from '../tweetInterface'
import { TWEETS } from '../tweetList'
import { TweetService } from '../tweet.service'
import { Tweet } from '../list/list.component';
import { Router } from '@angular/router'
import { SingleComponent } from '../single/single.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent implements OnInit {
  tweets: TweetInfo[];
  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit(): void {
    this.getTweets();
  }

  getTweets(): void {
    this.tweetService.getTweets()
      .then(tweets => this.tweets = tweets);
  }

  randNum(
  ): number {
    return Math.floor(Math.random() * 10000)
  }

  postTweet(username: string, location: string, notTweet: string): void {
    if (username === "" || location === "" || notTweet === "") {
      return alert("Please enter a username/location/notTweet")
    }
    let id = this.randNum();
    let tweet = {id, username, location, notTweet}
    TWEETS.unshift(tweet)
  }


}
