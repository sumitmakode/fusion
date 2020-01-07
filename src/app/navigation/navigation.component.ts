import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logo = "assets/img/logo.png";
  navbar = [{"link":"Home","path":"/home"},{"link":"Service","path":"/service"},
  			{"link":"Team","path":"/team"},
  			{"link":"Pricing","path":"/pricing"},
  			{"link":"Testimonial","path":"/testi"},
  			{"link":"Contact","path":"/contact"}];

}
