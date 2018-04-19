import {Component,EventEmitter,Output} from '@angular/core'
import {DataStorageService} from "../shared/data.storage.service";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent {

  //@Output() featureSelected=new EventEmitter<string>();//this is for navigation

  /*onSelect(feature:string){
      this.featureSelected.emit(feature)
  }*/

  constructor(private dataStorageService:DataStorageService,private authService:AuthService){}

  onSaveData(){
    this.dataStorageService.storeRecipe()
      .subscribe(
        (data)=>console.log(data),
        (error)=>console.log(error)
      )
  }

  onFetchData(){
    this.dataStorageService.getRecipes()
  }

  onLogout(){
    this.authService.logout()
  }
}
