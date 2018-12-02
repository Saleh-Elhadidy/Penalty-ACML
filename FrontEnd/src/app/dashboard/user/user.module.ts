import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { UserComponent } from './user.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angular4-social-login";
import { GoogleLoginProvider} from "angular4-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("351066557379-lou7fe4fsbi6n88ep3mjqd7d04g522hu.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2204728999799015")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [UserRoutingModule , JwSocialButtonsModule,SocialLoginModule,CommonModule],
  declarations: [UserComponent],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class UserModule {}
