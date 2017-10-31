import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetInfo } from './tweetInterface'
import { TWEETS } from './tweetList'
import { Tweet } from './list/list.component';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { SingleComponent } from './single/single.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ChirpFormComponent },
    { path: 'tweets', component: Tweet },
    { path: 'single/:id', component: SingleComponent },
    { path: 'login', component: LoginComponent }
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}