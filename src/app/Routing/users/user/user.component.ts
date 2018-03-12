import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramSubscription : Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id:this.route.snapshot.params['userId'],/*this approach is only for a init the component render*/
      name:this.route.snapshot.params['userName']
    }; 

   this.paramSubscription =  this.route.params  /*params is observable so we can use subscribe that if we use params it will not updated when the new route '
    change in the same component so we are using params...this method we can use as route reactively*/
      .subscribe(
        (params:Params)=>{
          this.user.id = params['userId']
          this.user.name = params['userName']
        }
      )
  }

  ngOnDestroy (){//this approach is used for writing the own Observable..if we write the own Observable u should unsubscribe
    // manually but now we are using angular soo angular will do it for us...
    this.paramSubscription.unsubscribe()
  }

}
