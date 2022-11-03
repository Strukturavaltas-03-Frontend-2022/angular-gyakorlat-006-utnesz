import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LocationComponent } from './model/location/location.component';
import { EventComponent } from './model/event/event.component';
import { EventsListComponent } from './page/events-list/events-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LocationComponent,
    EventComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
