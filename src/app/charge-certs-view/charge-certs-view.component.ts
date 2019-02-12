import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApigttService
} from '../apigtt.service';

@Component({
  selector: 'app-charge-certs-view',
  templateUrl: './charge-certs-view.component.html',
  styleUrls: ['./charge-certs-view.component.css']
})
export class ChargeCertsViewComponent {
  alias: string;
  repo: string;
  clientName: string;
  password: string;
  integrations: string;
  emailRenov: string;
  observations: string;
  valid: boolean;
  msgControl:string;

  constructor(private api: ApigttService) {}

  obtainCert(event) {
    var reader = new FileReader();
    var arrayBuffer;
    let apiAux = this.api;
    let validation = this.valid;
    let msgControl = this.msgControl;
    let alias= this.alias;
    let repo= this.repo;
    let clientName= this.clientName;
    let password= this.password;
    let integrations= this.integrations;
    let emailRenov= this.emailRenov;
    let observations= this.observations;
    if (this.alias !== undefined && this.repo !== undefined && this.clientName !== undefined && this.password !== undefined && this.integrations !== undefined && this.emailRenov !== undefined) {
      console.log('entro aqui')
      reader.onload = function () {
        arrayBuffer = reader.result;
        let arrayBuffer2 = arrayBuffer.split(',');
        //console.log(arrayBuffer);
        //console.log(arrayBuffer2);
        apiAux.sendCertificate(arrayBuffer2[1],alias,repo,clientName,password,integrations,emailRenov,observations) .then((result) => {
            validation=true;
            alias='';
            repo='';
            clientName='';
            password='';
            integrations='';
            emailRenov='';
            observations='';
            arrayBuffer='';
          }).catch((error)=>{
            validation=true;
            msgControl='Error, comprueba todos los campos'
          });
      };
      reader.readAsDataURL(event.target.files[0]);
    }else{
      console.log('entro')
      this.valid=true;
      this.msgControl = 'Los campos con (*) no pueden estar vacios. Comprueba los datos.'
    }
  }
  // sendForm() {
  //   this.api.sendCertificate(this.alias, this.repo).then(result => {
  //     console.log(result);
  //   }).catch(error => console.error(error))
  // }

}
