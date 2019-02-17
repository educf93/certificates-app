import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { DataModel, Jira, Certificates } from '../data-model';
import { ApigttService } from '../apigtt.service';

@Component({
  selector: 'app-panel-view',
  templateUrl: './panel-view.component.html',
  styleUrls: ['./panel-view.component.css']
})
export class PanelViewComponent implements OnInit {

  data:DataModel;
  jiraData:Jira;
  id:string = localStorage.getItem('iduser').replace('"','').replace('"','');
  auString:string;
  constructor(private dataManager:DataManagerService, private api:ApigttService) { }

  downloadCert(id:number){
    this.dataManager.manageDownload(id);
  }

  addTask(cert:Certificates){
    this.api.validateUser(this.jiraData)
    .then((result)=>{
      this.auString = this.jiraData.username+":"+this.jiraData.password;
      this.api.addJiraTask(this.jiraData,this.auString,cert)
      .then(result => console.log(result))
      .catch(error => console.log(error));
    })
    .catch(error => console.error(error));
    this.dataManager.updateCerts(cert);
  }

  ngOnInit() {
    this.data = this.dataManager.getData('')
    this.jiraData = this.dataManager.getJiraData(this.id);
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
