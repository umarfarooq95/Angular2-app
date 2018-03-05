import {Component} from '@angular/core';
import {AccountServices} from "./Services/accounts.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountServices]
})
export class AppComponent implements OnInit {
  /*name = '';
   age = "qqq";*/

  accounts:{name:string,status:string}[] = []

  featureSelected = 'recipe';

  value = 5;

  constructor(private accountService:AccountServices) {
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts
  }

  onNavigate(feature:string) {
    this.featureSelected = feature
  }


  onAccountAdded(newAccount:{name:string, status:string}) {
    this.accountService.onAddAccount(newAccount.name, newAccount.status)
  }

  onStatusChanged(updateInfo:{id:number, newStatus:string}) {
    this.accountService.onUpdateSttaus(updateInfo.id, updateInfo.newStatus)
  }
}
