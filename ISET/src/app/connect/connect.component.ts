import { Component } from '@angular/core';
import { Compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  user= new Compte;
  erreur:boolean=false;
  constructor(private authServ : AuthService, private router: Router) { };
  connected(){
    let permission: boolean = this.authServ.connect(this.user); // on se connecte avec user
    console.log("Tentative de connexion :" + this.user.email);
    if (permission)
    this.router.navigate(['dashboard']); // on navigue vers la liste des étudiants//on va ensuite remplacer 'etudiants'par'dashboard
    else
    this.erreur=true;  // on a une erreur
    }
    reset() {
    this.erreur = false;// on n’a plus d’erreur
    }
}
