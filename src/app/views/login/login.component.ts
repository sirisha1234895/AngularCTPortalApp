import { OnInit, ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { TokenStorageService } from "../../services/token-storage.service";
import { User } from "../user";
@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  user: User;
  @ViewChild("loginForm")
  loginForm: NgForm;
  loginAttempt = 0;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private _router: Router
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  // onSubmit(): void {
  //   const { username, password } = this.form;

  //   this.authService.login(username, password).subscribe(
  //     (data) => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);
  //       this.loginAttempt = 0;
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     (err) => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //       this.loginAttempt++;
  //       if (this.loginAttempt > 3) {
  //         this.errorMessage =
  //           'Account blocked,kindly contact to hospital administrator';
  //         this.authService.blockUser(username);
  //       }
  //     }
  //   );
  // }
  authenticate(loginForm: NgForm) {
    // console.log(loginForm.value);
    this.authService.login(this.user.email, this.user.password).subscribe(
      (user) => {
        console.log(user);
        this.tokenStorage.saveToken(user.accessToken);
        this.tokenStorage.saveUser(user);
        this.loginAttempt = 0;
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      this._router.navigateByUrl('/dashboard');
      // this.reloadPage();
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.loginAttempt++;
        if (this.loginAttempt > 3) {
          this.errorMessage =
            "Account blocked,kindly contact to hospital administrator";
          this.authService.blockUser(this.user.email);
        }
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
