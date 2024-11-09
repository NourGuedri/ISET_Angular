import { Component , OnInit} from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  redoubleStyle ={'color':'red'};
  tab_etu : Etudiant[];
  constructor(private studentServ : StudentService ,public authServ : AuthService) {
  this.tab_etu = studentServ.listStudents();
  }


  suppEtudiant (e : Etudiant) {
    let rep = confirm("Etes-vous sûr de vouloir supprimer cet étudiant "+e.nom+" "+e.prenom+"?");
if (rep) {
    this.studentServ.delStudent(e);
    console.log("Suppression avec succes :"+e.nom)
    }
  }
  ngOnInit(): void {
  }
  }
