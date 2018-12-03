import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-create',
  templateUrl: `./create.html`
})
export class CreateComponent implements OnInit {
  namein:any ="" ;
  habit:any;
  habits:any[] =[];
  emailin:any = localStorage.getItem("UserMail") ;
  StartDate:any ="" ;
  EndDate:any="";
  description:any="";
  constructor(private toastr: ToastrService,private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { }
ngOnInit(){
}

insertHabit(){
  this.habits.push(this.habit)
  this.habit="";
}
CreateGroup(){


  var data = JSON.stringify({ name: this.namein ,StartDate: this.StartDate , email:this.emailin , habits:this.habits , Description:this.description})
   var config = {
     headers: {
       'Content-Type': 'application/json'
     }
   }
   this.httpClient.post(environment.apiUrl + 'group/Create',data, config).subscribe(
     res => {
      console.log(res)
      this.router.navigate(["/dashboard/groups"]);
     }, err => {
      this.toastr.error("", err.error["msg"]);
      }
   );
 }

}
