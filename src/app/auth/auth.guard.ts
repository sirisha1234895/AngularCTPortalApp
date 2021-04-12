import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { TokenStorageService } from "../services/token-storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router,private tokenService: TokenStorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     console.log("AUTH GUARD")
     
     console.log(localStorage.getItem('auth-token'));
      if (localStorage.getItem('auth-token') != null)
       return true;
       this.router.navigate(['/login']);
       return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string) {
    if (this.tokenService.isLoggedIn()) {
      console.log("ALREADY LOGGED IN")
      return true;
    }

    //this.tokenService.redirectUrl = url;

    this.router.navigate(['/login'], {queryParams: { returnUrl: url }} );
  }
}