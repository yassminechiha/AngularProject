import { Component } from '@angular/core';
import { employetype } from '../models/employetype';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../services/projet.service';
import { EmployeesService } from '../services/employees.service';
import { projettype } from '../models/projettype';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editproj',
  templateUrl: './editproj.component.html',
  styleUrls: ['./editproj.component.css']
})
export class EditprojComponent {
  selectedEmployees: any[] = [];
  public employes:employetype[]=[];
  public email: string | null = null;
  public employe : employetype = {} as employetype;
  public projet : projettype = {} as projettype ;
  public projetId : string| null=null;
  public errorMessage:string | null =null;

  //injecter le service
   constructor (private projectservice:ProjetService , private EmployeesService: EmployeesService , private router : Router, private activateRoute:ActivatedRoute, private location: Location){

   }

   ngOnInit() {
    this.getAllEmployeesFromServer();
    this.activateRoute.paramMap.subscribe((params )=> {
      this.email=params.get('email');
      console.log("Hey 0 "+this.email);
      this.projetId= params.get('projetId');//projetId kima l configuration du router //extraire lid du router
      console.log("Hey 1 "+this.projetId);

    });
    if(this.projetId){
      this.projectservice.getprojet(this.projetId).subscribe(data => {
        console.log("Hey  "+data);

        this.projet=data;
      },(error)=>{
        
        this.errorMessage=error;
      })
    
    }
  }
    public updateSubmit(){
      if(this.projetId){
      this.projectservice.updateProjet(this.projet,this.projetId).subscribe(data => {//ken shiha thot data f server w temchi l page intial
        this.router.navigate(['/ProjlistComponent/' + this.email]).then();//if there is not an error bech temchi lel page intial 
      } , (error)=>{
        this.errorMessage=error;
        this.router.navigate(['/edit']).then(); 
      });
  
     }
    }
    public getAllEmployeesFromServer(){
      this.EmployeesService.getAllEmployees().subscribe({next :(data :any) =>
        this.employes=data, //fetches a list of employees from a service and stores them in an array
       error :((error : any) => this.errorMessage),
       complete:()=>console.log("oke")
      });
     }
     goBack() {
      this.location.back();
    }

}
