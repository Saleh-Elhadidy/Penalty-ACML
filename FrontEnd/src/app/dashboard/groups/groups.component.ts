import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-dashboard-groups',
  templateUrl: `./groups.html`
})
export class GroupsComponent implements OnInit {
  public groups: any[] = [];
  constructor(private http: HttpClient, private httpClient: HttpClient) { }
ngOnInit(){
  this.ViewGroups();
}
   ViewGroups() {
    this.httpClient.get(environment.apiUrl + 'group/getAllGroups').subscribe(
      res => {
        this.groups = res['data'];
      }
    );
  }

}
