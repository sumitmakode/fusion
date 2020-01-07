import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heading = "Dashboard";
  pera = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat!";
  dowlodbtn = "Download Now";
  learnbtn = "Learn More";
  headimg = "assets/img/intro-mobile.png";

}
