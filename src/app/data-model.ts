export interface DataModel {
  certificates: Array < Certificates >
}

export interface Jira {
  user:string,
  password:string,
  proyect:string,
  architecture:string,
  team:string,
  url:string,
  exploitation:string,
  component:string,
  descripition:string
}

export interface Certificates {
  idCertificate: number,
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
    content: string
}
