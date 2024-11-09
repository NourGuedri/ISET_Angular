import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Group } from '../model/groupe.model';
import { ThisReceiver } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  tab_grp:Group[];
  tab_etu : Etudiant[];
  constructor() { 
    this.tab_etu = [
     { cin:111, nom:"Dridi", prenom:"Nawel", dateNaiss:new 
    Date("09/27/2002"),moy:12.5, grp:{ idgrp:3, nomGrp:"DSI23", 
    parcours:"Développement des Systèmes d'Information"}},
     { cin:222, nom:"Ben Hamda", prenom:"Sami", dateNaiss:new 
    Date("11/04/2002"),moy :14.25, grp:{ idgrp:5, nomGrp:"SEM21", 
    parcours:"Systèmes Embarqués et Mobiles"}},
    { cin:333, nom:"Zaier", prenom:"Manel", dateNaiss:new 
Date("02/15/2001"),moy:12, grp:{ idgrp:1, nomGrp:"DSI21", 
parcours:"Développement des Systèmes d'Information"}},
 { cin:444, nom:"Fourati", prenom:"Iyed", dateNaiss:new 
Date("06/24/2001"), moy:9.88, grp:{ idgrp:4, nomGrp:"RSI21", 
parcours:"Réseaux et Systèmes Informatiques"}}
 ]
 this.tab_grp = [
 { idgrp:1, nomGrp:"DSI21", parcours:"Développement des Systèmes d'Information"},
 { idgrp:2, nomGrp:"DSI22", parcours:"Développement des Systèmes d'Information"},
 { idgrp:3, nomGrp:"DSI23", parcours:"Développement des Systèmes d'Information"},
 { idgrp:4, nomGrp:"RSI21", parcours:"Réseaux et Systèmes Informatiques"},
 { idgrp:5, nomGrp:"SEM21", parcours:"Systèmes Embarqués et Mobiles"}
 ]
 }
  listStudents(): Etudiant[] {
    return this.tab_etu;
  }
  addStudent(e:Etudiant): void
  {
    this.tab_etu.push(e);//pour ajouter cet objet à la fin du tableau
    console.log(e.nom);
  }
  delStudent(e:Etudiant):void
  {
    const pos= this.tab_etu.indexOf(e);
    if(pos != -1)
    {
      this.tab_etu.splice(pos,1);
    }
  }
  viewStudent (num : number) : Etudiant {
    return this.tab_etu.find(e => e.cin==num)!
    }
  editStudent(e:Etudiant)
  {
    
      this.delStudent(e);
      this.addStudent(e);
    
    
  }
  listGroups():Group[]
  {
    return this.tab_grp;
  }
  viewGroup(num:number):Group
  {
    return this.tab_grp.find(e => e.idgrp==num)!
  }
  getNbStudents(): number {
    return this.tab_etu.length;
  }

  getNbGroups(): number {
    return this.tab_grp.length;
  }

  getAvgMoyennes(): number {
   let moyenne=0;
   this.tab_etu.forEach(e=>moyenne+=e.moy);
   return moyenne/this.getNbStudents();

}
}
