import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import {GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-user',
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!--Facebook-->
  <button class="btn" style="background-color:#A93226"  *ngIf = !loggedIn  (click) = "signInWithGoogle()"><i class="fa fa-google"  ></i></button> 
  <button *ngIf = loggedIn type="button" class="socicon-facebook" (click) = "signOut()">Logout</button>
  <button class="btn" style="background-color:#154360"  *ngIf = !loggedIn  (click) = "signInWithFB()"><i class="fa fa-facebook"  ></i> Login with Facebook </button> 
  <button class="btn" style="background-color:#154360"   (click) = "Route()"><i class="fa fa-facebook"  ></i> Try Routing </button> 

  <div *ngIf = loggedIn>
  <img src="{{ user.photoUrl }}">
<div>
  <h4>{{ user.name }}</h4>
  <p>{{ user.email }}</p>
</div>
</div>
  `
})
export class UserComponent {
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
  this.router.navigate(["/dashboard/items"]);
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
