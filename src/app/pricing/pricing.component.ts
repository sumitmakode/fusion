import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  price = "Pricing";
  pvalue = "$10"; 
  spanvalue = "/mo";
  ppvalue = "$35";
  pppvalue = "$150";
  head1 = "Pro";
  head2 = "Plus";
  head3 = "Premium";
  btn = "Buy Now";
  li1 = " 1 user";
  li2 = "10 GB storage";
  li3 = "Email support";
  li4 = "Lifetime updates";
  li5 = "10 user";
  li6 = "30 GB storage";
  li7 = "Priority email support";
  li8 = "Unlimited users";
  li9 = "Unlimited storage";
  li10 = "24/7 support";

  
}
