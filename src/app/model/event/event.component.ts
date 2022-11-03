import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  name: string = "";
  date: string = "";
  time: string = "";
  location: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
