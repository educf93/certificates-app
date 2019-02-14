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
  id:number;
  postRequest:boolean
  constructor(private api:ApigttService,private dataManager:DataManagerService, private route:ActivatedRoute) { }

  //createJiraTask(){
  //  this.api.validateUser(this.jiraData)
  //  .then((result)=>{
  //    this.auString = this.jiraData.username+":"+this.jiraData.password;
  //    this.api.addJiraTask(this.jiraData,this.auString)
  //    .then(result => console.log(result))
  //    .catch(error => console.log(error));
  //  })
  //  .catch(error => console.error(error));
  //}
  validateOrRegister(){
    this.api.manipulateDBJira(this.postRequest,this.jiraData)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }
  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.jiraData = this.dataManager.getJiraData(this.id);
    this.jiraData.username==''?this.postRequest = true : this.postRequest = false;
    if(this.jiraData == undefined){
      this.jiraData = {
        id:this.id,
        username:'',
        password:'',
        proyect:'',
        url:'',
        issue:'',
        component:'',
        descripition:'',
        iduser:this.id
    }
  }

}
}
