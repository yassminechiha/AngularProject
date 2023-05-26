import { Component } from '@angular/core';
import { employetype } from '../models/employetype';
import { ProjetService } from '../services/projet.service';
import { ActivatedRoute } from '@angular/router';
import { projettype } from '../models/projettype';
import { EmployeesService } from '../services/employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent {
  public projet: projettype | undefined;
  public errorMessage: string | null = null;
  p: any;
  tasks: string[] | undefined;
  teams: number[] | undefined;
  teamsEmail: Record<number, employetype> = {};

  // injecter le service
  constructor(private projetService: ProjetService, private location: Location,private empService: EmployeesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.p = this.route.snapshot.paramMap.get('projectId');
    this.getprojetFromServer();
  }
  goBack() {
    this.location.back();
  }

  public getprojetFromServer() {
    this.projetService.getprojet(this.p).subscribe({
      next: (data: any) => {
        this.projet = data;
        
        this.tasks = this.projet?.tasks;
        this.teams = this.projet?.team;
        if (this.teams) {
          for (const teamId of this.teams) {
            this.empService.getEmployee(teamId.toString()).subscribe({
              next: (e: any) => {
                this.teamsEmail[teamId] = e;
              },
              error: (error: any) => {
                console.log(error);
              }
            });
          }
        }
      },
      error: (error: any) => this.errorMessage = error,
      complete: () => console.log(this.teamsEmail)
    });
  }
}
