import { Component, OnInit } from '@angular/core';
import { TweetInfo } from '../tweetInterface'
import { TWEETS } from '../tweetList'
import { TweetService } from '../tweet.service'
import { Tweet } from '../list/list.component';
import { SingleComponent } from '../single/single.component';


@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  randNum(
  ): number {
    return Math.floor(Math.random() * 10000)
  }

  postTweet(username: string, location: string, notTweet: string): void {
    let id = this.randNum();
    let tweet = {id, username, location, notTweet}
    TWEETS.unshift(tweet)
  }

}
