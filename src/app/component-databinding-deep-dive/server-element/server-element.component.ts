import { Component, OnInit,Input ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation:ViewEncapsulation(None.Native,Emulated)Default---Emulated used for apply the style in global or in component only
})
export class ServerElementComponent implements OnInit {

  @Input('srvElem') element:{type:string,name:string,content:string};
  /*Input is used to know the this property we can use for property binding*/
  /*we can pass the alias to the custom property binding if we use alias then the property name will not exist we use only
  * the alias property*/

  constructor() {

  }

  ngOnInit() {
  }

}
