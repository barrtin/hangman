import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { HomeComponent } from './home/home.component'
import { GameComponent } from './game/game.component'
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component'
import { UserService } from './core/services/user.service'

export const firebaseConfig = {
  apiKey: "AIzaSyCH1lMo5k5sWXk4n4mYhLEdmBIEEOjrdpo",
  authDomain: "test-14368.firebaseapp.com",
  databaseURL: "https://test-14368.firebaseio.com",
  storageBucket: "test-14368.appspot.com",
  messagingSenderId: "618201016557"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
