import { Component,OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';


 OnInit(){
    (function ($) {
        console.log("Hello from jQuery!");
    })(jQuery);
  }
  }