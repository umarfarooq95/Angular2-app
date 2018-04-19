import {Component,OnInit} from '@angular/core';
import {AccountServices} from "./Services/accounts.services";
import * as firebase from 'firebase'

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
    this.accounts = this.accountService.accounts;
    firebase.initializeApp({
      apiKey: "AIzaSyA5nfqnuGyhe6Qy6tbxq5h7JA93TT-v5xk",
      authDomain: "ng-recipe-book-23ed0.firebaseapp.com"
    })

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
