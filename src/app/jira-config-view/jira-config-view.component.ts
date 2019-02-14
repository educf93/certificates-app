import { Component, OnInit, } from '@angular/core';
import { Jira } from '../data-model';
import { ApigttService } from '../apigtt.service';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jira-config-view',
  templateUrl: './jira-config-view.component.html',
  styleUrls: ['./jira-config-view.component.css']
})
export class JiraConfigViewComponent implements OnInit{
  jiraData:Jira;
  jiraToken:string;
  id:number;
  postRequest:boolean
  constructor(private api:ApigttService,private dataManager:DataManagerService, private route:ActivatedRoute) { }

  createJiraTask(){
    this.api.validateUser(this.jiraData)
    .then((result)=>{
      this.jiraToken=result['value'];
      this.api.addJiraTask(this.jiraData,this.jiraToken)
      .then()
      .catch();
    })
    .catch();
  }
  ngOnInit(){
    console.log(this.jiraData);
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.jiraData = this.dataManager.getJiraData(this.id);

    this.jiraData.user==''?this.postRequest = false : this.postRequest = true;
  }

}
