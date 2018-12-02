import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import {GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: `./user.html`,
  styleUrls: ['./user.scss'],
})
export class UserComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private authService: AuthService,private http: HttpClient,private router: Router) { }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
 
  signOut(): void {
    this.authService.signOut();
  }
  Route(){
    console.log("ana hena");
  this.router.navigate(["/dashboard/groups"]);
  }

  ngOnInit() {
    if(this.user!=null){
      console.log("aaaaaaa");
    }
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
 

}
