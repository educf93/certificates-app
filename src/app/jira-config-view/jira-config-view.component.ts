import { Component, OnInit, } from '@angular/core';
import { Jira } from '../data-model';
import { ApigttService } from '../apigtt.service';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-jira-config-view',
  templateUrl: './jira-config-view.component.html',
  styleUrls: ['./jira-config-view.component.css']
})
export class JiraConfigViewComponent implements OnInit{
  jiraData:Jira;
  jiraToken:string;
  auString:string;
  id:string = localStorage.getItem('iduser');
  postRequest:boolean
  constructor(private api:ApigttService,private dataManager:DataManagerService, private route:ActivatedRoute) { 
    if(this.id !== null){
      this.id=this.id.replace('"','').replace('"','');
      console.log(this.id)
    }
  }

  validateOrRegister(){
    this.api.manipulateDBJira(this.postRequest,this.jiraData)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }
  ngOnInit(){
    this.jiraData = this.dataManager.getJiraData(this.id);
    this.jiraData.username==''?this.postRequest = true : this.postRequest = false;
    if(this.jiraData == undefined){
      this.jiraData = {
        id:parseInt(this.id),
        username:'',
        password:'',
        proyect:'',
        url:'',
        issue:'',
        component:'',
        descripition:'',
        iduser:parseInt(this.id)
    }
  }

}
}
