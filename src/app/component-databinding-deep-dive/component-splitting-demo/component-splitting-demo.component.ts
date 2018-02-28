import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-splitting-demo',
  templateUrl: './component-splitting-demo.component.html',
  styleUrls: ['./component-splitting-demo.component.css']
})
export class ComponentSplittingDemoComponent implements OnInit {

  serverElement = [{type: 'bluePrint', name: 'ss', content: 'test'}]

  constructor() {
  }

  ngOnInit() {
  }

  onServerCreated(serverData:{serverName:string,serverContent:string}) {
    let serverObj = {
      name: serverData.serverName,
      content: serverData.serverContent,
      type: "server"
    }
    this.serverElement.push(serverObj)
  }

  onServerBluePrintCreated(blueprintData:{serverName:string,serverContent:string}) {
    let serverBluePrintObj = {
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      type: "bluePrint"
    };
    this.serverElement.push(serverBluePrintObj)
  }


}
