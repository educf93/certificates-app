import { Component, OnInit } from '@angular/core';
import { DataModel } from '../data-model';
import { ActivatedRoute  } from '@angular/router';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  id: number;
  data: DataModel;
  constructor(private route: ActivatedRoute, private dataManager:DataManagerService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.data = this.dataManager.getData(this.id)
  }

}
