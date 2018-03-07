import {LoggingService} from "./logging.services";

import {Injectable,EventEmitter} from '@angular/core'

@Injectable()
export class AccountServices {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(public loggingService:LoggingService){

  }

  statusUpdated = new EventEmitter<string>()

  onAddAccount(name:string, status:string) {
    this.accounts.push({name, status});
    this.loggingService.loggedToConsole(status)
  }

  onUpdateSttaus(id:number, status:string) {
    this.accounts[id].status = status;
    this.loggingService.loggedToConsole(status)
  }
}
