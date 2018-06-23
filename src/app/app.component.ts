import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAP5dzJ_vOVP9EO1snLhy4-YOljLqfKHnY',
      authDomain: 'ng-recipe-book-1ad04.firebaseapp.com'
    });
  }
}
