import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { Compte } from '../model/compte.model';
import { UsersService } from '../services/user.service';
@Component({
 selector: 'app-connect-http',
 templateUrl: './connect-http.component.html',
 styleUrls: ['./connect-http.component.css']
})
export class ConnectHttpComponent implements OnInit {
 users!: UserModel[]
 user = new Compte();
 erreur = false;
 userCourant! : string;
 isConnected : boolean = false;
 constructor(private userServ: UsersService, private router:
Router) { }

 getUsers(): void {
 this.userServ.getUsers().subscribe(items => this.users =
items);
 }
 disconnect() {
 this.isConnected = false;
 this.userCourant = undefined!;
 this.router.navigate(['/']);
 }
 connect(user : Compte) : boolean {
 this.users.forEach((unUser) => {
 if(user.email == unUser.email && user.mot2pass==unUser.username) {
 this.userCourant = unUser.name!;
 this.isConnected = true;
 console.log("nom : "+this.userCourant); }
 });
 return this.isConnected;
 }
 setUserCourant(u : string) {
 this.userCourant = u;
 this.isConnected = true;
 }
 connected(){
 let permission: boolean = this.connect(this.user);
 console.log("Tentative de connexion :" + this.user.email);
 if (permission)
 this.router.navigate(['/dashboard']);
 else
 this.erreur=true;
 }
 reset() {
 this.erreur=false;
 }
 ngOnInit() {
 this.getUsers();
 }
}