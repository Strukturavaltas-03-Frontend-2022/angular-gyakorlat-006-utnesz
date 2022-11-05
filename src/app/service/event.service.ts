import { Injectable } from '@angular/core';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}
  public eventList: Event[] = [
    {
      name: 'Woodstock',
      date: '10th March',
      time: '18:00',
      location: {
        address: 'Grand lane 18',
        city: 'Woodstock',
        country: 'USA',
      },
    },
    {
      name: 'Sziget Festival',
      date: '10th August',
      time: '20:00',
      location: {
        address: 'Boatfactory street 7.',
        city: 'Woodstock',
        country: 'HUN',
      },
    },
    {
      name: 'Volt Festival',
      date: '10th July',
      time: '22:00',
      location: {
        address: 'Lővérek 10.',
        city: 'Sopron',
        country: 'HUN',
      },
    },
  ];

  getAll(): Event[] {
    return this.eventList;
  }
}

