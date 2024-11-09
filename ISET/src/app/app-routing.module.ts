import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { SearchEtudiantComponent } from './search-etudiant/search-etudiant.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EtudiantGuard } from './guard/etudiant.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';


const routes: Routes = [
  { path: "etudiants", component: EtudiantsComponent },
{ path: "add-etudiant", component:  AddEtudiantComponent, canActivate:[EtudiantGuard] },
{ path: '', pathMatch: 'full', redirectTo: 'connect' },
{ path: "updateEtudiant/:num", component : UpdateEtudiantComponent },
{ path: "search-etudiant", component : SearchEtudiantComponent}
,{ path:  "connect", component : ConnectComponent}
,{ path:  "connecthttp", component : ConnectHttpComponent}
,{path: "dashboard", component: DashboardComponent}
,{ path: "forbidden",component: ForbiddenComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers :[EtudiantGuard]
})
export class AppRoutingModule { }

