export interface DataModel {
  certificates: Array < Certificates >
}

export interface Jira {
  id:number,
  username:string,
  password:string,
  proyect:string,
  url:string,
  issue:string,
  component:string,
  descripition:string
  iduser:number;
}

export interface Certificates {
    id: number,
    alias: string,
    entity: string,
    serialNum: string,
    subject: string,
    expireDate: Date,
    password: string,
    idOrg: number,
    clientName: string,
    emailRenov: string,
    repo: string,
    observations: string,
    content: string,
    notice:boolean,
    ticketed:boolean
}
