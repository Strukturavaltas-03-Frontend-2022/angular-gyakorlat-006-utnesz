import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {


address: string = "";
city: string = "";
country: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
