import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-navbar-panel-view',
  templateUrl: './navbar-panel-view.component.html',
  styleUrls: ['./navbar-panel-view.component.css']
})
export class NavbarPanelViewComponent implements OnInit {

  constructor(private credentials: CredentialsService) {
    
  }
  
  deleteCredentials(){
    localStorage.clear()
  }
  ngOnInit() {
    this.credentials
  }

}
