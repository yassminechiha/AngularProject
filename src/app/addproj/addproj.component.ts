import { Component } from '@angular/core';
import { employetype } from '../models/employetype';
import { ProjetService } from '../services/projet.service';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { projettype } from '../models/projettype';

@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.component.html',
  styleUrls: ['./addproj.component.css']
})
export class AddprojComponent {
 selectedEmployees: any[] = [];
  public employes:employetype[]=[];
  public employe : employetype = {} as employetype;
  public projet : projettype = {} as projettype ;
  public errorMessage:string | null =null;
  public email: string | null = null;
  projects: number[]=[];
  id :string | undefined;

  constructor (private projectservice:ProjetService, private employeesService: EmployeesService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit():void {
    this.getAllEmployeesFromServer();
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
        this.projects=this.employe.projects;
        console.log("Hey"+ this.projects)
      },
      error: (error: any) => {
        // Handle the error
      },
      complete: () => {
        console.log("oke");
      }
    });
  }
  
  public getAllEmployeesFromServer(){
    this.employeesService.getAllEmployees().subscribe({
      next: (data :any) => {
        this.employes=data;
      },
      error: ((error : any) => this.errorMessage),
      complete: () => console.log("oke")
    });
  }

  public createSubmit() {
    this.projectservice.createProject(this.projet).subscribe({
      next: (data: any) => {
        // If the project was successfully created, add its ID to the employee's project list
        if (this.employe && data.id && this.employe.id) {
          this.id=this.employe.id.toString();
          this.employe.projects.push(data.id);
          this.employeesService.updateEmploye(this.employe, this.id).subscribe({
            next: (data: any) => {
              console.log("Employee updated successfully:", data);
            },
            error: (error: any) => {
              console.error("Error updating employee:", error);
            }
          });
        }
        this.router.navigate(['/ProjlistComponent/' + this.email]).then(() => {
          // Do something after navigating
        });
      },
      error: (error: any) => {
        // Navigate to the 'add' route in case of an error
        this.router.navigate(['/AddprojComponent']).then(() => {
          // Do something after navigating
        });
      },
    });
  }
  
  
  
}
