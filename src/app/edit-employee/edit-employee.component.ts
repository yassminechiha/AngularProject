import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employetype } from '../models/employetype';
import { EmployeesService } from '../services/employees.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  public employe : employetype = {} as employetype ;
  public errorMessage : string | null = null;
  public employeId : string | null = null;


  constructor (private activateRoute:ActivatedRoute,
    private employeesService:EmployeesService,
    private router:Router){


  }
  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params )=> {
      this.employeId= params.get('employeId');//employeId kima l configuration du router //extraire lid du router
  
    });
    if(this.employeId){
      this.employeesService.getEmployee(this.employeId).subscribe(data => {
        this.employe=data;
      },(error)=>{
        this.errorMessage=error;
      })
    
    }
  }
    public updateSubmit(){
      if(this.employeId){
      this.employeesService.updateEmploye(this.employe,this.employeId).subscribe(data => {//ken shiha thot data f server w temchi l page intial
        this.router.navigate(['/EmployesComponent']).then();//if there is not an error bech temchi lel page intial 
      } , (error)=>{
        this.errorMessage=error;
        this.router.navigate(['/edit']).then(); 
      });
  
     }
    }


}