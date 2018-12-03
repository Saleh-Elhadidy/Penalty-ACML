import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { UserRoutingModule } from './user-routing.module';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { UserComponent } from './user.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angular4-social-login";
import { GoogleLoginProvider} from "angular4-social-login";
import { environment } from '../../../environments/environment';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.GoogleURL)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.FacebookURL)
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
