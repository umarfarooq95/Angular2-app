import * as firebase from 'firebase'
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  constructor(private router:Router){}
  token:string
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (res)=>{
          console.log(res)
          this.router.navigate(['/signin'])
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (res)=>{
          console.log(res)
          this.router.navigate(['/'])
          firebase.auth().currentUser.getToken()
            .then(
              (token:string)=>this.token = token
            )
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }
  getToken(){
     firebase.auth().currentUser.getToken()
       .then(
         (token:string)=>this.token = token
       )
       .catch(
         (error) => console.log(error)
       )
    return this.token
  }

  isAuthenticated(){
    return this.token!=null
  }

  logout(){
    firebase.auth().signOut()
    this.token = null
  }
}
