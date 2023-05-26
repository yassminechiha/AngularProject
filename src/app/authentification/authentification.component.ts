import { Component, NgModule } from '@angular/core';
import { employetype } from '../models/employetype';

import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent {
  public email!: string;
  public pwd!: string;
  public employes:employetype[]=[];
  public errorMessage:string | null =null;
  public employe: employetype | undefined;
 
  //injecter le service
  constructor (private activateRoute:ActivatedRoute,
    private employeesService:EmployeesService,
    private router:Router) {
  }

  ngOnInit():void{ 
  }
  public clickconnecter(email: string, pwd: string) {
    if (email && pwd) {
      this.employeesService.getEmployeeEmail(email).subscribe(data => {
        if (Array.isArray(data)) {
          this.employe = data[0];
        } else {
          this.employe = data;
        }
        console.log(this.employe?.title);
  
        if (this.employe?.mdp === pwd) { // check if password matches
          if (this.employe?.title === "rh") {
            this.router.navigate(['./home']);
          }
          if (this.employe?.title === "employe") {
            this.router.navigate(['./homeemployee/:email' + email]);
          }
          if (this.employe?.title === "chef de projet") {
            this.router.navigate(['./homechef/:email' + email]);
          }
        } else {
          // handle incorrect password
          alert('Incorrect password!');
        }
      }, error => {
        this.errorMessage = error;
      });
    }
  }
  
  
  
}