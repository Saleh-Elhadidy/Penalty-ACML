import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  template: `<router-outlet></router-outlet>`
})
export class DashboardComponent {
  constructor(private router: Router) { }

  Route(){
  this.router.navigate(["/items"]);
  }
}
