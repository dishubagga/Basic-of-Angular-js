import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  a;
  b;
  c;
  val=false;
  onc(){
    this.val=true;
    this.c=this.a*this.b; 
  }
  
}
