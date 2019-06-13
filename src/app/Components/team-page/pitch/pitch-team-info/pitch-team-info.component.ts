import { Component, OnInit, Input } from '@angular/core';
  
import FantasyPlayer from 'src/app/Models/FantasyPlayer';

@Component({
  selector: 'app-pitch-team-info',
  templateUrl: './pitch-team-info.component.html',
  styleUrls: ['./pitch-team-info.component.scss']
})
export class PitchTeamInfoComponent implements OnInit {
  @Input() player: FantasyPlayer;

  constructor() { }

  ngOnInit() {
  }

}
