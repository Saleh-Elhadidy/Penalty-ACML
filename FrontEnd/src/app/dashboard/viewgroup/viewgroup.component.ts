import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-viewgroup',
  templateUrl: `./viewgroup.html`
})
export class ViewGroupComponent implements OnInit {
  public groups: any[] = [];
  constructor(private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { }
ngOnInit(){
  this.ViewGroups();
}
Route(){
  console.log("ana hena");
this.router.navigate(["/dashboard/viewgroup"]);
}
   ViewGroups() {
    this.httpClient.get(environment.apiUrl + 'group/getAllGroups').subscribe(
      res => {
        this.groups = res['data'];
      }
    );
  }

}
