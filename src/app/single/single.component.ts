import { Component, Input, OnInit } from '@angular/core';
import { TweetInfo } from '../tweetInterface';
import { TWEETS } from '../tweetList';
import { TweetService } from '../tweet.service';
import { Tweet } from '../list/list.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  
  constructor(private tweetService: TweetService) {

  }

  ngOnInit(): void {
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.tweetService.getTweet(+params.get('id')))
    // .subscribe(hero => this.hero = hero);
  }

}
