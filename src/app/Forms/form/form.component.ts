import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') signUpForm: NgForm;
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    this.signUpForm.form.patchValue({//this approach is for a particular field
      userData: {
        username: suggestedName,
        email: ''
      }
    })
  }

  /*onSubmit(form:NgForm){
    console.log(form)
  }*/

  onSubmit() {
    console.log(this.signUpForm)
    this.signUpForm.reset()//reset all the property of the form..
  }

  constructor() {
  }

  ngOnInit() {
  }

}
