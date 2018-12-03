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
 emailin:any=localStorage.getItem("UserMail");

 
  constructor(private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { 
   
  }

ngOnInit(){
  this.ViewGroups();
}
Route(){
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

  Join(Name: String){
  var data = JSON.stringify({ name: Name , email:this.emailin})
   var config = {
     headers: {
       'Content-Type': 'application/json'
     }
   }
   this.httpClient.post(environment.apiUrl + 'group/join',data, config).subscribe(
     res => {
      console.log(res)
      localStorage.setItem("GroupName", JSON.stringify(Name));
      this.router.navigate(['dashboard/viewgroup/']);     }
   );
  }



}
