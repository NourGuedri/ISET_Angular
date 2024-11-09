import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { SearchEtudiantComponent } from './search-etudiant/search-etudiant.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {HttpClientModule} from '@angular/common/http';
import { ConnectHttpComponent } from './connect-http/connect-http.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    SearchEtudiantComponent,
    ConnectComponent,
    DashboardComponent,
    ForbiddenComponent,
    ConnectHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
