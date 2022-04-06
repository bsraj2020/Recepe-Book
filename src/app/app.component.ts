import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';
import { LoggerService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoggerService] // app.module me bhi kr skte hai
  // encapsulation = ViewEncapsulation.Emulated;    tin type hote hai, web me _ngcontent dikhta hai iski vajah se
})
export class AppComponent {
  title = 'Course-Project';

}

// All property of components only accessible inside the component not outside the components