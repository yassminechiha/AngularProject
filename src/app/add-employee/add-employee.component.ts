import { Component, OnInit } from '@angular/core';
import { employetype } from '../models/employetype';
import { EmployeesService } from '../services/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  public employe : employetype = {} as employetype ;
  public errorMessage : string | null = null;

  constructor (private employeesService:EmployeesService,
    private router : Router){

  }
 ngOnInit():void{ //method that is automatically called when the component is initialized.

  
/*this.employeesService.getAllEmployees().subscribe({next :(data :any) =>
      this.employes=data, //fetches a list of employees from a service and stores them in an array
     error :((error : any) => this.errorMessage),
     complete:()=>console.log("oke")
    });*/
   }
   public createSubmit(){
    this.employeesService.createEmploye(this.employe).subscribe({
      next: (data: any) => {
        // Navigate to the root route if there is no error
        this.router.navigate(['/EmployesComponent']).then(() => {
          // Do something after navigating
        });
      },
      error: (error: any) => {
        // Navigate to the 'add' route in case of an error
        this.router.navigate(['/add']).then(() => {
          // Do something after navigating
        });
      }
    });
  }
  


}