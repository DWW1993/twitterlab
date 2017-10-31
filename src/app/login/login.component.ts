import { Component, OnInit, Input } from '@angular/core';
import { TweetInfo } from '../tweetInterface';
import { TWEETS } from '../tweetList';
import { TweetService } from '../tweet.service';
import { Tweet } from '../list/list.component';
import { Router } from '@angular/router';
import { SingleComponent } from '../single/single.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { StructureDirective } from '../structure.directive'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  email: string;
  username: string;
  createPassword: string;

  constructor(private fb: FormBuilder) { 
    this.rForm = this.fb.group({
      'email': ['', Validators.email],
      'username': ['', Validators.compose([Validators.minLength(5), Validators.maxLength(15)])],
      'createPassword': ['', Validators.compose([Validators.minLength(8), Validators.maxLength(24)])],
    })
  }

  ngOnInit() {
  }

}