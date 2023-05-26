import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ProjlistComponent } from './projlist/projlist.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { EspaceRHComponent } from './espace-rh/espace-rh.component';
import { EmployesComponent } from './employes/employes.component';
import { AddprojComponent } from './addproj/addproj.component';

import { EditprojComponent } from './editproj/editproj.component';
import { EventsComponent } from './events/events.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { HomeComponent } from './home/home.component';
import { EmployeEventsComponent } from './employe-events/employe-events.component';
import { EventchefComponent } from './eventchef/eventchef.component';
import { HomechefComponent } from './homechef/homechef.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
const routes: Routes = [
  { path: 'HomePage/:email/DetailsProjet/:projectId', component: DetailsProjetComponent },
  { path:'HomePage/:email', component: HomePageComponent },
  { path: 'EspaceRH', component: EspaceRHComponent },
  { path:'', component: AuthentificationComponent },
  { path:'add', component: AddEmployeeComponent },
  { path: 'EmployesComponent/:email', component: EmployesComponent },
  { path: 'EmployesComponent', component: EmployesComponent },
  { path:'EmployesComponent/edit/:employeId', component: EditEmployeeComponent },
  { path:'AddprojComponent/:email', component: AddprojComponent },
  { path:'ProjlistComponent/:email', component: ProjlistComponent },
  { path:'ProjlistComponent', component: ProjlistComponent },
  
  { path:'AddprojComponent', component: AddprojComponent },
  {path:'homechef/:email', component:HomechefComponent},
  {path: 'ProjlistComponent/:email/edit/:projetId', component: EditprojComponent},
  {path:'EmployeEventsComponent/:email', component:EmployeEventsComponent},
  {path:'events', component:EventsComponent},
  {path:'eventchef/:email', component:EventchefComponent},
  {path:'home', component:HomeComponent},
  {path: 'editevent/:eventId',component:EditEventComponent},
  {path:'edit/:employeId', component: EditEmployeeComponent},
  {path: 'addevent',component:AddEventComponent},
  {path: 'logout',component:AuthentificationComponent},
  { path:'homeemployee/:email', component: HomeEmployeeComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
