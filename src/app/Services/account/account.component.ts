import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from "../logging.services";
import {AccountServices} from "../accounts.services";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account:{name:string, status:string};
  @Input() id:number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingServiceInj:LoggingService, private accountService:AccountServices) {
  }


  onSetTo(status:string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.onUpdateSttaus(this.id, status)
    //console.log('A server status changed, new status: ' + status);
    //this.loggingServiceInj.loggedToConsole(status)
    this.accountService.statusUpdated.subscribe(
      (status:string)=>alert('New Status ' + status)
    )
    this.accountService.statusUpdated.emit(status)
  }
}
