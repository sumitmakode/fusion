import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testi',
  templateUrl: './testi.component.html',
  styleUrls: ['./testi.component.css']
})
export class TestiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  pera = "Praesent cursus nulla non arcu tempor, ut egestas elit tempus. In ac ex fermentum, gravida felis nec, tincidunt ligula.";
  name1 = "David Smith";
  head1 = "Creative Head";

  name2 = "Domeni GEsson";
  head2 = "Awesome Technology co."; 

  name3 = "Dommini Albert";
  head3 = "Nesnal Design co.";

  name4 = "Fernanda Anaya";
  head4 = "Developer";


  /*geth = "Get 30 days free trial";
  getp = "Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam.";
  getbtn = "Register Now";  */


}
