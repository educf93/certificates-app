import { Injectable } from '@angular/core';
import { ApigttService } from './apigtt.service';
import { DataModel } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  data:DataModel = { certificates:[] };
  

  constructor(private api:ApigttService) { }

  loadData(){
    return this.api.getBackEndData().then(result => {
      const certificates = result.map(certs => ({
        idCertificate:certs.id,
        alias:certs.alias,
        entity:certs.entity,
        serialNum:certs.serialNum,
        subject:certs.subject,
        expireDate:certs.expireDate,
        password:certs.password,
        idOrg:certs.password,
        clientName:certs.clientName,
        emailRenov:certs.emailRenov,
        repo:certs.repo,
        observations:certs.observations,
      }))
      this.data.certificates = result;
    }).catch(error =>{
      console.error(error);
    })
  }
  getData(){
    this.loadData();
    return this.data;
  }
}
