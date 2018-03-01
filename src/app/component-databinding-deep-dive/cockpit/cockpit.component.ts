import { Component, OnInit,EventEmitter,Output,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output('bpCreated') serverBluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>()

  @ViewChild('serverContentInput') serverContentInput:ElementRef;//ViewChild is like local Ref but 
  // we can access the value directly to the ts file unlike local ref
  
  /*Output Is used to emit the custom Events we can pass the Event data whatever we want..In this case We want a
  * serverName,serverContent Value*/
  

  constructor() { }

  ngOnInit() {
  }
  onServerAdd(serverNameInput:HTMLInputElement){//this is used as local reference we can use ref in any HTML element
    this.serverCreated.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value})
    /*Emit is the function that the emit the custom events*/
  }

  onServerBluePrintAdd(serverNameInput:HTMLInputElement){//this is used as local reference we can use ref in any HTML element
    this.serverBluePrintCreated.emit({serverName:serverNameInput.value,serverContent:this.serverContentInput.nativeElement.value})
    /*Emit is the function that the emit the custom events*/
  }
}
