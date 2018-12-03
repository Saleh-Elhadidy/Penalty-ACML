import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-viewgroup',
  templateUrl: `./viewgroup.html`
})
export class ViewGroupComponent implements OnInit {
  namein:any ="" ;
  habits:any[] =[];
  participants:any[] =[];
participant:any;
  emailin:any = JSON.parse(localStorage.getItem("UserMail")) ;
  StartDate:any ="" ;
  EndDate:any="";
  Data:String;
  Description:String;
  checkCounter:any[]=[];
  member:boolean=false;
  Ended:boolean=false;
  loser:any;
  constructor(private toastr: ToastrService,private http: HttpClient, private httpClient: HttpClient, private router: Router  ) { }
ngOnInit(){
  this.namein =  JSON.parse(localStorage.getItem("GroupName"))
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
      this.Ended=res['data'].Ended
      this.habits = res['data'].habits;
      this.participants=res['data'].participants;
      this.StartDate= res['data'].StartDate;
      this.EndDate= res['data'].EndDate;
      this.participant= this.participants[0];
      this.Description=res['data'].Description;
      this.checkCounter=res['data'].participationCount
for(var i =0 ; i<this.participants.length; i++){
  console.log(this.participants[i])
  console.log(this.emailin)
  if(this.participants[i]==this.emailin)
{
  
  this.member=true;
  break;
}
}
if(this.Ended==true){
this.GetResult();
}
console.log(this.Description)
    }
  );
}
ViewGroups(){
  this.router.navigate(['dashboard/groups/']);     }

  Check(){
    var data = ({ name: this.namein , email:this.emailin })
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log(this.namein)
    this.httpClient.post(environment.apiUrl + 'group/check',data, config).subscribe(
      res => {
       console.log(res)
       this.checkCounter=res['data'].participationCount
      // this.router.navigate(["/dashboard/groups"]);
      }, err => {
        this.toastr.error("", err.error["msg"]);
        }
    );
  }

  GetResult(){
    var config = {
      headers:
          {
              'Content-Type': 'application/json'
          }
  }
    this.Data =JSON.parse(localStorage.getItem("GroupName"))
  this.httpClient.get(environment.apiUrl + 'group/getResult/'+this.Data ,config).subscribe(
    res => {
      console.log(res['data'])
      this.loser=res['data'];
    })
  }

  payPenalty(){
    this.router.navigate(['dashboard/items/']);
  }

}
