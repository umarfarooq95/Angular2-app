import {ActivatedRoute, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService){}
  canActivate(route:ActivatedRoute,state:RouterStateSnapshot){
    return this.authService.isAuthenticated()
  }
}
