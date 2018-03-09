import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-routing-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class RoutingServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
