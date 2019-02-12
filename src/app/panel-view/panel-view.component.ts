import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { DataModel } from '../data-model';

@Component({
  selector: 'app-panel-view',
  templateUrl: './panel-view.component.html',
  styleUrls: ['./panel-view.component.css']
})
export class PanelViewComponent implements OnInit {

  data:DataModel;
  constructor(private dataManager:DataManagerService) { }

  downloadCert(id:number){
    this.dataManager.manageDownload(id);
  }

  ngOnInit() {
    this.data = this.dataManager.getData()
    console.log(this.data);
  }

}
