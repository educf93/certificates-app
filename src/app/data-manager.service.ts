import { Injectable } from '@angular/core';
import { ApigttService } from './apigtt.service';
import { DataModel, Jira, Certificates } from './data-model';
import { DomSanitizer } from '@angular/platform-browser'
import { saveAs,FileSaver } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  data:DataModel = { certificates:[] };
  msgError:string;
  fileUrl:any;
  jira:boolean = false;
  jiraData:Jira;

  constructor(private api:ApigttService, private sanitizer:DomSanitizer) { }
  manageDownload(id:number){
    this.api.getBackEndData(id,this.jira)
    .then(
      result => this.downloadData(result.content,result.alias)
    )
    .catch(
      error => console.error(error)
      
    );
  }
  loadData(id){
    return this.api.getBackEndData(id,this.jira).then(result => {
      if(id===''){
      const certificates = result.map(certs => (
        {
        id:certs.id,
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
        notice:certs.notice,
        ticketed:certs.ticketed
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

  getJiraData(id){
    const jira:boolean = true;
    this.loadJiraData(id,jira)
    return this.jiraData
  }
  loadJiraData(id,jira){
    return this.api.getBackEndData(id,jira)
    .then((result)=>{
      this.jiraData = result;
     //console.log(this.jiraData);
    })
    .catch(error =>{console.log(error)
       this.jiraData = {
        id:id,
        username:'',
        password:'',
        proyect:'',
        url:'',
        issue:'',
        component:'',
        descripition:'',
        iduser:id
      }})
  }
  updateCerts(cert:Certificates){
    this.api.updateCertDB(cert)
    .then(
      this.loadData('')
    )
    .catch( error => console.log(error))
  }
}
