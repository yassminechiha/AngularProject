import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employetype } from '../models/employetype';
import { EmployeesService } from '../services/employees.service';
import { projettype } from '../models/projettype';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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

info:any;
  constructor(private employeesService: EmployeesService, private projetService: ProjetService, private route: ActivatedRoute) { this.photo=undefined}

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
      console.log("oke");
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

}
