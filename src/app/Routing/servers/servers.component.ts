import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class RoutingServersComponent implements OnInit {
  servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
