import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from "../logging.services";
import {AccountServices} from "../accounts.services";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name:string, status:string}>();

  constructor(private loggingServiceInj:LoggingService, private accountService:AccountServices) {
  }

  onCreateAccount(accountName:string, accountStatus:string) {
    /*  this.accountAdded.emit({
     name: accountName,
     status: accountStatus
     });*/
    this.accountService.onAddAccount(accountName, accountStatus)
    //console.log('A server status changed, new status: ' + accountStatus);
    //this.loggingServiceInj.loggedToConsole(accountStatus)
  }
}
