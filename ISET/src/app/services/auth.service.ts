import { Injectable } from '@angular/core';
import { Compte } from '../model/compte.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
users:Compte[]=[{email: 'guedrinour545@gmail.com',role: 'Agent',nom:'Nour Elhouda Guedri',mot2pass:'nour1234'},{email: 'admin@gmail.com',role: 'ADMIN',nom:'Administrateur ',mot2pass:'azerty'}];
userCourant!: string;
roleCourant !:string;
isConnected=false;
connect(user:Compte)
{
  this.users.forEach(unUser=>{
    if(unUser.email==user.email && unUser.mot2pass==user.mot2pass
  ){
    this.isConnected=true;
    this.userCourant=unUser.nom;
    this.roleCourant=unUser.role;
    localStorage.setItem('userCourant',this.userCourant);
    localStorage.setItem('isConnected',String(this.isConnected));
    }});
    return this.isConnected;
}

disconnect()
{
  this.isConnected=false;
  this.userCourant="";
  this.roleCourant ="";
  this.router.navigate(['/connect'])
localStorage.removeItem('userCourant');
localStorage.removeItem('isConnected');
}

constructor(private router: Router) { }

testerAdmin(){
  return this.roleCourant=='ADMIN';
}
calculNbUsers (){
  return this.users.length;
  }
}
