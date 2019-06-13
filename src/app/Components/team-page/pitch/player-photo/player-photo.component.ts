import { Component, OnInit, Input } from '@angular/core';
import SoccerPlayer from 'src/app/Models/SoccerPlayer';

@Component({
  selector: 'app-player-photo',
  templateUrl: './player-photo.component.html',
  styleUrls: ['./player-photo.component.scss']
})
export class PlayerPhotoComponent implements OnInit {
  @Input() player: SoccerPlayer;
  @Input() isCaptain: boolean;

  constructor() { }

  ngOnInit() {
  }

}
