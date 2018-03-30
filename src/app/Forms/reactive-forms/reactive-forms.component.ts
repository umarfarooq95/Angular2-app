import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUserName = ['Anna', 'Chris'];


  constructor() {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.valueChanges.subscribe(
      (value => console.log(value))
    );
    this.signUpForm.statusChanges.subscribe(
      (status => console.log(status))
    );
    this.signUpForm.setValue({
      userData:{
        username:"umar",
        email:'umar@gmail.com'
      },
      gender:'male',
      hobbies:[]
    });
    this.signUpForm.patchValue({
      userData:{
        username:"Farooq"
      },
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset({gender:'male'})
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray> this.signUpForm.get('hobbies')).push(control)
  }

  forbiddenNames = (control: FormControl): { [s: string]: boolean } => {
    if (this.forbiddenUserName.indexOf(control.value) !== 1) {
      return {names: true}
    }
    return null
  };

  forbiddenEmail = (control: FormControl): Promise<any> | Observable<any> => {
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value == 'test@test.com'){
          resolve({"emailForbidden":true})
        }
        else{
          resolve(null)
        }
      },1500)
    });
    return promise;
  }

}
