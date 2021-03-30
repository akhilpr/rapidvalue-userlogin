import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login"; 
import { Router } from '@angular/router'; 
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  error!: boolean;
  constructor(
    private SocialloginService: SocialAuthService,
    private msalervice: MsalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // check google user state
  authState() {
    this.SocialloginService.authState.subscribe(res =>{
      const obj = {
        userName:res.name,
        email:res.email,
        photoUrl:res.photoUrl,
        provider:res.provider,
        token:res.idToken
      }
      sessionStorage.setItem('userData',JSON.stringify(obj))
      this.router.navigate(['user-details'])
    })
  }

  // login for google
  googleLogin(){
    this.SocialloginService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.authState()
  }

  // login for microsoft
  microsoftLogin(){
    this.msalervice.loginPopup().subscribe((res: AuthenticationResult) =>{
      const obj = {
        userName:res.account?.name,
        email:res.account?.username,
        photoUrl:null,
        provider:res.account?.environment,
        token:res.idToken
      }
      sessionStorage.setItem('userData',JSON.stringify(obj))
     this.router.navigate(['user-details'])
    })
  }

  // login for normal user
  login(){
    if (this.userName === 'admin' && this.password === 'admin') {
      const obj = {
        userName:'admin',
        email:'admin@gmail.com',
        photoUrl:null,
        provider:'Normal Login',
        token:''
      }
      sessionStorage.setItem('userData',JSON.stringify(obj))
     this.router.navigate(['user-details'])
     this.error = false;
    } else {
      this.error = true;
    }
  }
}
