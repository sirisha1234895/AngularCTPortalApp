import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
  isLoginFailed = false;
  errorMessage = "";
  constructor(  private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private _router: Router) { }

  ngOnInit(): void {
    this.tokenStorage.signOut();
    this.isLoginFailed=true;
    this.errorMessage="Successfully logout";
    this._router.navigateByUrl('/login');
      
  }
  reloadPage(): void {
    window.location.reload();
  }

}
