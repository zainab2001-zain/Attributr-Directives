import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  highlightcolor="white";
  isstyledApplied=false;
  highlight(color:string){
this.highlightcolor=color;
  }
  togglestyle(){
     this.isstyledApplied=!this.isstyledApplied;
  }
}
