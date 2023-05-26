import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TasksComponent } from './tasks/tasks.component';
import { AttachementsComponent } from './attachements/attachements.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { EspaceRHComponent } from './espace-rh/espace-rh.component';
import{HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployesComponent } from './employes/employes.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ProjlistComponent } from './projlist/projlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddprojComponent } from './addproj/addproj.component';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventsComponent } from './events/events.component';
import { EditprojComponent } from './editproj/editproj.component';
import { EmployeEventsComponent } from './employe-events/employe-events.component';
import { NvchefComponent } from './nvchef/nvchef.component';
import { EventchefComponent } from './eventchef/eventchef.component';
import { HomechefComponent } from './homechef/homechef.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';



@NgModule({
  declarations: [
    AppComponent,

    DetailsProjetComponent,
    HomePageComponent,
    TasksComponent,
    AttachementsComponent,
    AuthentificationComponent,
    EspaceRHComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployesComponent,
    EmplistComponent,
    ProjlistComponent,
    NavbarComponent,
   
    AddprojComponent,
    HomeComponent,
    AddEventComponent,
    EditEventComponent,
    EventsComponent,
    EditprojComponent,
    EmployeEventsComponent,
    NvchefComponent,
    EventchefComponent,
    HomechefComponent,
    HomeEmployeeComponent,
    NavbarEmployeeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
