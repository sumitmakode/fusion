import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  meet = "Meet our team";
  teams = [{"img":"assets/img/team/team-01.png","name":"David Smith", "hpera":"Front-end Developer", "pera":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."},
  			{"img":"assets/img/team/team-02.png","name":"ERIC PETERSON", "hpera":"Product Designer", "pera":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."},
  			{"img":"assets/img/team/team-03.png","name":"DURWIN BABB", "hpera":"Lead Designer", "pera":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."},
  			{"img":"assets/img/team/team-04.png","name":"MARIJN OTTE", "hpera":"Lead Designer", "pera":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur."}];
}
