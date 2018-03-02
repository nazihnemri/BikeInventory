import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeComponent } from './bikes/bike/bike.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';



import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeComponent,
    BikeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
