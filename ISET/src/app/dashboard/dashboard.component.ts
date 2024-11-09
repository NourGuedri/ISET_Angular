import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nbEtu = 0;
  nbGrp = 0;
  avgMoy = 0;
  nbUser= 0;
  constructor(private studentServ : StudentService, private  authServ:AuthService) {
     this.nbEtu = studentServ.getNbStudents()
     this.nbGrp = studentServ.getNbGroups()
     this.avgMoy = studentServ.getAvgMoyennes()
     this.nbUser = authServ.calculNbUsers();
     }
}
