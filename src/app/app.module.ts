import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { TweetInfo } from './tweetInterface'
import { TWEETS } from './tweetList'
import { TweetService } from './tweet.service'
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Tweet } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Tweet,
    SingleComponent,
    ChirpFormComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [
    TweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
