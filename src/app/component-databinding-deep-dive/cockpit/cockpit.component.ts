import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output() serverBluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>()

  /*Output Is used to emit the custom Events we can pass the Event data whatever we want..In this case We want a
  * serverName,serverContent Value*/

  serverName=''
  serverContent=''

  constructor() { }

  ngOnInit() {
  }
  onServerAdd(){
    this.serverCreated.emit({serverName:this.serverName,serverContent:this.serverContent})
    /*Emit is the function that the emit the custom events*/
  }

  onServerBluePrintAdd(){
    this.serverBluePrintCreated.emit({serverName:this.serverName,serverContent:this.serverContent})
    /*Emit is the function that the emit the custom events*/
  }
}
