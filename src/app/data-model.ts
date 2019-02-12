export interface DataModel {
    certificates:Array<Certificates>
}

export interface Users{
    iduser:number,
    username:string,
}

export interface Certificates{
    idCertificate:number,
    alias:string,
    entity:string,
    serialNum:string,
    subject:string,
    expireDate: Date,
    password:string,
    idOrg: number,
    clientName:string,
    emailRenov:string,
    repo:string,
    observations:string,
    content:string
}