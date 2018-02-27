import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-splitting-demo',
  templateUrl: './component-splitting-demo.component.html',
  styleUrls: ['./component-splitting-demo.component.css']
})
export class ComponentSplittingDemoComponent implements OnInit {

  serverName=''
  serverContent=''
  serverElement=[]

  constructor() { }

  ngOnInit() {
  }

  onServerAdd(){
    let serverObj = {
      serverName:this.serverName,
      serverContent:this.serverContent,
      type:"server"
    }
    this.serverElement.push(serverObj)
  }

  onServerBluePrintAdd(){
    let serverBluePrintObj = {
      serverName:this.serverName,
      serverContent:this.serverContent,
      type:"bluePrint"
    };
    this.serverElement.push(serverBluePrintObj)
  }

}
