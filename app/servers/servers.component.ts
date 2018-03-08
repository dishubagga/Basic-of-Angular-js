import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
a="event not Added"
name="dishu";
newserver=false;
servers = ['testserver', 'testserver 1'];
  constructor() { 
    setTimeout(() => {
       this.allowNewServer=true; 
        },2000);
    }

  ngOnInit() {
  }
  onClick(){
    this.newserver=true;
    this.servers.push(this.name)
    this.a="server added name is " +this.name ;
  }
  onInput(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }

}
