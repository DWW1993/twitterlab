import { Component } from '@angular/core';
import { TweetInfo } from './tweetInterface'
import { TWEETS } from './tweetList'
import { TweetService } from './tweet.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
