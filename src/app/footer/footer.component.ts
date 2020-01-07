import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pera = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.";
  hthreetitle = "Products"; 
  hfourtitle = "Resources";
  hfivetitle = "Contact";
  li1 = "Tracking";
  li2 = "Application";
  li3 = "Resource Planning";
  li4 = "Enterprise";
  li5 = "Employee Management";

  li6 = "Payment Options";
  li7 = "Fee Schedule";
  li8 = "Getting Started";
  li9 = "Identity Verification";
  li10 = "Card Verification";


  copy = "Copyright © 2020 ";
  Madison = " 105 Madison Avenue ";
  New = " Third Floor New York, NY 10016";
  right = " All Right Reserved";
}