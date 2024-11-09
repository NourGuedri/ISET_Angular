import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Group } from '../model/groupe.model';
@Component({
  selector: 'app-search-etudiant',
  templateUrl: './search-etudiant.component.html',
  styleUrls: ['./search-etudiant.component.css']
})
export class SearchEtudiantComponent {
  list_grp!:Group[];
  grpidRech!:Number;
  critere:String="nom";
  list_etu:Etudiant[];
 nomEtu!:String;
 moyetu!:String;
 moyidRech!:String
 constructor(private studentServ:StudentService) {
  this.list_etu = studentServ.listStudents()
  }
  chercherParNom(name: string): void {
    this.list_etu = this.studentServ.listStudents()
    if (name != ""){
    this.list_etu = this.list_etu.filter(e => e.nom.toLowerCase().includes(name.toLowerCase()));
    }
  }
  chercherParGrp(): void {
    this.list_etu = this.studentServ.listStudents()
    if(this.grpidRech !=0)
    {
      this.list_etu = this.list_etu.filter(e => e.grp.idgrp == this.grpidRech);
    }
    
  }
  chercherParmoy(moy: string): void {
    this.list_etu = this.studentServ.listStudents()
    if (moy != ""){
    this.list_etu = this.list_etu.filter(e => e.moy <= Number(moy));
    }
  }
  ngOnInit(){
    this.list_grp = this.studentServ.listGroups()
    }   
}
