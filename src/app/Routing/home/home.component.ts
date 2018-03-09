import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onLoadServer (){
    this.route.navigate(['/servers'])//take the arugument in array  /*To know the current route path use ActivatedRoute And
    // inject into the angular router  we can pass the second arugument in the navigation method object is the second parameter
    // we can use the relativeTo key to know the which route is relativeTo*/
  }
}
