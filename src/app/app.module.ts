import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';

// microsoft 
export function MSALInstance():IPublicClientApplication{
  return new PublicClientApplication({
    auth:{
      clientId:'031baace-a2ff-4703-9385-7c16cbc4860b',
      redirectUri:'http://localhost:4200'
    }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule,
    MsalModule,
    FormsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [   
        {  
          id: GoogleLoginProvider.PROVIDER_ID,  
          provider: new GoogleLoginProvider('335654533758-h6a49bu7jrtt8553mm16njahrca8t611.apps.googleusercontent.com')  
        }  
      ]
    } as SocialAuthServiceConfig,
  },
{
  provide:MSAL_INSTANCE,
  useFactory:MSALInstance
},MsalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
