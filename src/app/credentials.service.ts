import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService  {
  id:string = localStorage.getItem('iduser')

   constructor(private router: Router) { 
    if(this.id === null){
      this.router.navigate(['/login']);
    }
   }
}
