import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'signup.component.html'
})
export class SignUpComponent implements OnInit {
  user: User;
  @ViewChild('signupForm')
  signupForm: NgForm;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.user=new User();
  }

  ngOnInit(): void {
  }


  signup(signupForm: NgForm) {
    // console.log(loginForm.value);
    console.log(this.user);
    // this.authService.login('admin',this.user.password).subscribe(
    //   user => {
    //     alert("Successfull");
    //   },
    //   error => {
    //     console.log(error);
    //     alert('Invalid username or password!!!');
       
    //   }
    // );
  }
  reloadPage(): void {
    window.location.reload();
  }
}

