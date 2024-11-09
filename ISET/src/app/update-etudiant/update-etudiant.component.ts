import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../model/groupe.model';
@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [
  ]
})
export class UpdateEtudiantComponent implements OnInit
{
  etudiantCourant=new Etudiant();
  groups = this.studentServ.listGroups();
  idgrpModified!:number;
  constructor(private actRoute:ActivatedRoute, 
  private studentServ:StudentService ,private rout:Router) { }
  modifEtudiant () {
    this.etudiantCourant.grp=this.studentServ.viewGroup(this.idgrpModified)
     this.studentServ.editStudent(this.etudiantCourant)
     console.log ("Succès de modification etudiant " +
    this.etudiantCourant.cin + " - " + this.etudiantCourant.nom + " " +
    this.etudiantCourant.prenom + " - " + this.etudiantCourant.dateNaiss + " -" + this.etudiantCourant.moy)
     this.rout.navigate(['etudiants'])
    }
    ngOnInit(): void {
     this.groups = this.studentServ.listGroups()
     this.etudiantCourant=this.studentServ.viewStudent
    (this.actRoute.snapshot.params['num'])
     console.log("CIN etudiant à modifier "+this.etudiantCourant.cin)
     this.idgrpModified = this.etudiantCourant.grp.idgrp
    }
}
