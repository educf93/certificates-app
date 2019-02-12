import { Injectable } from '@angular/core';
import { ApigttService } from './apigtt.service';
import { DataModel } from './data-model';
import { DomSanitizer } from '@angular/platform-browser'
import { saveAs,FileSaver } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  data:DataModel = { certificates:[] };
  msgError:string;
  fileUrl:any;

  constructor(private api:ApigttService, private sanitizer:DomSanitizer) { }
  manageDownload(id:number){
    this.api.getBackEndData(id)
    .then(
      result => this.downloadData(result.content,result.alias)
    )
    .catch(
      error => console.error(error)
      
    );
  }
  loadData(id){
    return this.api.getBackEndData(id).then(result => {
      if(id===''){
      const certificates = result.map(certs => (
        {
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
      }
      this.data.certificates = result;
    }).catch(error =>{
      console.error(error);
    })
  }
  getData(id){
    this.loadData(id);
    return this.data;
  }

  downloadData(content,filename){
    var byteCharacters = atob(content);
    console.log(byteCharacters);
    var byteNumbers = new Array(byteCharacters.length);
    console.log(byteNumbers);

    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    console.log(byteArray);
    var file = new Blob([byteArray] ,{
      type: 'file/ctr'
    });
    saveAs(file,filename+'.p12')
  }
}
