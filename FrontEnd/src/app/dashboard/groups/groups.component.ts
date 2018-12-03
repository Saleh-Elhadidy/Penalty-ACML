import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-groups',
  templateUrl: `./groups.html`
})
export class GroupsComponent implements OnInit {
  public groups: any[] = [];
 

 
  constructor(private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { 
   
  }

ngOnInit(){
  this.ViewGroups();
}
Route(){
  console.log("ana hena");
this.router.navigate(["/dashboard/create"]);
}
 ViewGroups() {
    this.httpClient.get(environment.apiUrl + 'group/getAllGroups').subscribe(
      res => {
        this.groups = res['data'];
      }
    );
  }
  ViewGroup(ID: string) {
    localStorage.setItem("GroupName", JSON.stringify(ID));
    this.router.navigate(['dashboard/viewgroup/']);

  }



}
