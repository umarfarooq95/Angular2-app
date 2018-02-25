import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {


  id:number = 10;
  status:string = "offline";
  isStatus = false
  name:string='';
  property=false;

  constructor(){
    setTimeout(()=>{
      this.property = true
    },2000)
  }

  getStatus(){
    return this.status
  };

  onStatusChange (){
    this.isStatus = true
    this.status = 'online'
  }

  onUpdateName (event:Event){
    this.name = (<HTMLInputElement>event.target).value;
  }


}
