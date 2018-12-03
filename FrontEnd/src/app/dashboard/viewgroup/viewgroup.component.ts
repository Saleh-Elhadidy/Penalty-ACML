import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-viewgroup',
  templateUrl: `./viewgroup.html`
})
export class ViewGroupComponent implements OnInit {
  namein:any ="" ;
  habits:any[] =[];
  participants:any[] =[];
participant:any;
  emailin:any = localStorage.getItem("UserMail") ;
  StartDate:any ="" ;
  EndDate:any="";
  Data:String;
  constructor(private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { }
ngOnInit(){
  this.namein =  localStorage.getItem("GroupName") 
  this.ViewGroup();
}
ViewGroup() {
  var config = {
    headers:
        {
            'Content-Type': 'application/json'
        }
}
  this.Data =JSON.parse(localStorage.getItem("GroupName"))
  this.httpClient.get(environment.apiUrl + 'group/viewoneGroup/'+this.Data ,config).subscribe(
    res => {
      this.habits = res['data'].habits;
      this.participants=res['data'].participants;
      this.StartDate= res['data'].StartDate;
      this.EndDate= res['data'].EndDate;
      this.participant= this.participants[0];
console.log(this.participants)
    }
  );
}
}
