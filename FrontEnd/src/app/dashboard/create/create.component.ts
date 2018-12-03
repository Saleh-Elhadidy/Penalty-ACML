import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-create',
  templateUrl: `./create.html`
})
export class CreateComponent implements OnInit {
  namein:any ="" ;
  habits:any[] =[];
  emailin:any = localStorage.getItem("UserMail") ;
  StartDate:any ="" ;
  EndDate:any="";
  constructor(private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { }
ngOnInit(){
}
CreateGroup(){

  var data = JSON.stringify({ name: this.namein ,StartDate: this.StartDate , email:this.emailin , habits:this.habits})
   var config = {
     headers: {
       'Content-Type': 'application/json'
     }
   }
   this.httpClient.post(environment.apiUrl + 'group/Create',data, config).subscribe(
     res => {
      // window.location.reload();
      console.log(res)
     }
   );
 }

}