import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { User } from '../user';

@Component({
  templateUrl: 'registration.component.html'
})
export class RegistrationComponent {
  user: User;
  @ViewChild('registrationForm')
  signupForm: NgForm;
  errorMessage = '';
  roles: string[] = [];

  constructor( private authService: AuthService,
    private tokenStorage: TokenStorageService) {
      this.user=new User();
     }
     registerUser(registrationForm: NgForm) {
      
      console.log(this.user);
      
    }


}
