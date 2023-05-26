import { Component } from '@angular/core';
import { employetype } from '../models/employetype';
import { ProjetService } from '../services/projet.service';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { projettype } from '../models/projettype';


@Component({
  selector: 'app-nvchef',
  templateUrl: './nvchef.component.html',
  styleUrls: ['./nvchef.component.css']
})
export class NvchefComponent {
  public projet : projettype = {} as projettype ;
  public errorMessage:string | null =null;
  public email: string | null = null;
  public employe : employetype = {} as employetype;
  constructor (private projectservice:ProjetService ,private employeesService: EmployeesService, private route: ActivatedRoute, private EmployeesService: EmployeesService , private router : Router){

  }

  ngOnInit():void{ //method that is automatically called when the component is initialized.
   
   this.email = this.route.snapshot.paramMap.get('email');

   console.log('email: ', this.email);
   this.getemp(this.email || '');

  }
  public getemp(email: any) {
   this.employeesService.getEmployeeEmail(email.substr(6, email.length)).subscribe({
     next: (data: any) => {
       if (Array.isArray(data)) {
         this.employe = data[0];
       } else {
         this.employe = data;
       }
       email = this.employe?.email;
     },
     error: (error: any) => {
       // Handle the error
     },
     complete: () => {
       console.log("oke");
      
     }
   });
 }
 

}
