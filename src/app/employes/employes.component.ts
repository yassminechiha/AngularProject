import { Component } from '@angular/core';
import { employetype } from '../models/employetype';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {


    showEditDetailsFlag = false;
    showDeleteDetailsFlag = false;
  
    showEditDetails() {
      this.showEditDetailsFlag = true;
    }
  
    showDeleteDetails() {
      this.showDeleteDetailsFlag = true;
    }

  
    hideDeleteDetails() {
      
      this.showDeleteDetailsFlag = false;
    }
    hideEditDetails() {
      this.showEditDetailsFlag = false;
      
     
    }
  
  
  public employes:employetype[]=[];
  public errorMessage:string | null =null;

  //injecter le service
   constructor (private employeesService:EmployeesService){

   }

   ngOnInit():void{ //method that is automatically called when the component is initialized.
    this.getAllEmployeesFromServer();
 

   }
   public getAllEmployeesFromServer(){
    this.employeesService.getAllEmployees().subscribe({next :(data :any) =>
      this.employes=data, //fetches a list of employees from a service and stores them in an array
     error :((error : any) => this.errorMessage),
     complete:()=>console.log("oke")
    });
   }
   //erreuur!!
   public clickDeleteEmployee(employeeId: string | undefined ) {
    if (employeeId) {
      this.employeesService.deleteEmployee(employeeId).subscribe(
        (data) => {
          this.getAllEmployeesFromServer();
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
  


   }



