import {Component, OnInit} from '@angular/core';
import {SampleHttpService} from "./sample-http-service";
import {Params} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-making-http',
  templateUrl: './making.component.html',
  styleUrls: ['./making.component.css']
})
export class MakingComponent implements OnInit {
  appName=this.sampleHttpService.getAppName()
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private sampleHttpService: SampleHttpService) {
  }

  ngOnInit() {
  }

  onSaveServer() {
    this.sampleHttpService.storeServer(this.servers)
      .subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      );
  }

  onGetServer() {
    this.sampleHttpService.getServer()
    /*   .subscribe(
         (response: HttpResponse<any>) => {
           const data = response
           console.log(data)
         },
         (error) => {
           console.log(error)
         }
       );*/
      .subscribe(
        (servers:any) => {
          this.servers = servers
        },
        (error) => {
          console.log(error)
        }
      );
  }

}
