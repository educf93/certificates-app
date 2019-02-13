import { Component, OnInit } from '@angular/core';
import { Jira } from '../data-model';
import { ApigttService } from '../apigtt.service';

@Component({
  selector: 'app-jira-config-view',
  templateUrl: './jira-config-view.component.html',
  styleUrls: ['./jira-config-view.component.css']
})
export class JiraConfigViewComponent {
  user:string;  
  password:string;
  proyect:string;
  architecture:string;
  team:string;
  url:string;  
  exploitation:string;
  component:string;
  descripition:string;
  jiraData:Jira
  constructor(private api:ApigttService) { }

  createJiraTask(){
    const jiraData = {user:this.user,
      password:this.password,
      proyect:this.proyect,
      architecture:this.architecture,
      team:this.team,
      url:this.url,
      exploitation:this.exploitation,
      component:this.component,
      descripition:this.descripition,
      jiraData:this.jiraData
    }
    this.api.validateUser(jiraData)
    .then(()=>this.api.addJiraTask(jiraData))
    .catch();
  }

}
