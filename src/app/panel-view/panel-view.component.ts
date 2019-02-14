import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { DataModel, Jira } from '../data-model';

@Component({
  selector: 'app-panel-view',
  templateUrl: './panel-view.component.html',
  styleUrls: ['./panel-view.component.css']
})
export class PanelViewComponent implements OnInit {

  data:DataModel;
  jiraData:Jira;
  id:string = localStorage.getItem('iduser').replace('"','').replace('"','');
  constructor(private dataManager:DataManagerService) { }

  downloadCert(id:number){
    this.dataManager.manageDownload(id);
  }

  viewDetails(id:number){
  }

  ngOnInit() {
    this.data = this.dataManager.getData('')
    this.jiraData = this.dataManager.getJiraData(this.id);
    console.log(this.jiraData);
    console.log(this.data);
  }

}
