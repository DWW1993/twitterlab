import { Component, Input, OnInit } from '@angular/core';
import { TweetInfo } from '../tweetInterface';
import { TWEETS } from '../tweetList';
import { TweetService } from '../tweet.service';
import { Tweet } from '../list/list.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Input() tweet: TweetInfo
  constructor(
    private tweetService: TweetService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.tweetService.getTweet(+params.get('id')))
    .subscribe(tweet => this.tweet = tweet);
  }

  goBack(): void {
    this.location.back();
  }

}
