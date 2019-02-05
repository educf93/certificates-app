export interface DataModel {
    user:Array<Users>
    certificate:Array<Certificates>
}

export interface Users{
    iduser:number,
    username:string,
    jwt:string
}

export interface Certificates{
    alias:string,
    entity:string,
    serialNum:number,
    subject:string,
    expireDate: Date;
    password:string,
    idOrg: number,
    clientName:string,
    emailRenov:string,
    repo:string,
    observations:string
}