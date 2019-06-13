import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-divider',
  templateUrl: './list-divider.component.html',
  styleUrls: ['./list-divider.component.scss']
})
export class ListDividerComponent implements OnInit {
  @Input() Title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
