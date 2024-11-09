import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Group } from '../model/groupe.model';
import { group } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent {
newEtu =new Etudiant;
newGrp=new Group;
groups =this.studentServ.listGroups()
newCin!:number;
constructor(private rout :Router ,private studentServ : StudentService) { }
ajouterEtudiant() {
  this.newGrp = this.studentServ.viewGroup(this.newCin)
  // this.groups = this.studentServ.listGroups()
  this.studentServ.addStudent(this.newEtu);
  this.rout.navigate(['etudiants'])
  } 
}
