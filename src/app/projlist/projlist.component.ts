import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employetype } from '../models/employetype';
import { EmployeesService } from '../services/employees.service';
import { projettype } from '../models/projettype';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projlist',
  templateUrl: './projlist.component.html',
  styleUrls: ['./projlist.component.css']
})
export class ProjlistComponent implements OnInit{

  public employe: employetype | undefined;
  public errorMessage: string | null = null;
  public email: string | null = null;
  public projets: number[] | undefined;
  public projetsData: projettype[] = [];
  public teams: number[] = [];
  employee: any;
  public photo : string | undefined ;
  public photos : string []=[];
  photosByProject: any;
  id :string | undefined;

info:any;
  constructor(private employeesService: EmployeesService, private projetService: ProjetService, private route: ActivatedRoute, private router: Router) { this.photo=undefined}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');

    console.log('email: ', this.email);
    this.getemp(this.email || ''); // pass an empty string as a default value
  }

  
  public getemp(email: any) {
    this.employeesService.getEmployeeEmail(email.substr(6, email.length)).subscribe({
      next: (data: any) => {
        if (Array.isArray(data)) {
          this.employe = data[0];
        } else {
          this.employe = data;
        }
        email = this.employe?.email
        this.projets = this.employe?.projects;
        if (Array.isArray(this.projets)) {
          // initialize an empty array to store photos for each project
        this.photosByProject = [];

for (let i = 0; i < this.projets.length; i++) {
  this.projetService.getprojet(this.projets[i].toString()).subscribe({
    next: (datap) => {
      let teams = datap.team;
      this.teams.push(...teams);
      
      // create new photo array for the current project
      this.photosByProject[i] = [];
      for(let k=0;k<teams.length;k++){
        console.log(this.teams[k]);
        this.employeesService.getEmployee(this.teams[k].toString()).subscribe({
          next:(data:any) => {
      
            this.photosByProject[i].push(data.photo);
          }
        });
      }
      this.projetsData.push(datap);
    },
    error: (error: any) => {
      // Handle the error
    },
    complete: () => {
      
      this.teams=[];
    }
  });
}

        } else {
          this.employe = data;
        }
      },
      error: (error: any) => {
        this.errorMessage = error;
      },
      complete: () => {
        console.log("oke");
      },
    });

  }

  public clickDeleteProject(projetId: string | undefined ) {
    if (projetId) {
      this.projetService.deleteProject(projetId).subscribe(
        (data) => {
          // Remove the project ID from the employee's projects array
          const id = parseInt(projetId, 10);
          if (this.employe && this.employe.id && this.employe.projects && this.employe.projects.indexOf(id) !== -1) {
            const index = this.employe.projects.indexOf(id);
            this.employe.projects.splice(index, 1);
            this.id=this.employe.id.toString();
  
            // Update the employee using the employeesService
            this.employeesService.updateEmploye(this.employe, this.id).subscribe({
              next: (data: any) => {
                console.log("Employee updated successfully:", data);
              },
              error: (error: any) => {
                console.error("Error updating employee:", error);
              }
            });
          }
  
          // Refresh the project list
          this.router.navigate(['/ProjlistComponent/' + this.email]).then(() => {
            // Do something after navigating
          });
  
          // Do not navigate to another page
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
  
}
