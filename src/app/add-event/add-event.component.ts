
import { Component, OnInit } from '@angular/core';
import { eventtype } from '../models/eventtype';
import {EventServiceService} from '../services/event-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {
  
  public event : eventtype = {} as eventtype ;
  public errorMessage : string | null = null;

  constructor (private eventsService:EventServiceService,
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
    this.eventsService.createEvent(this.event).subscribe({
      next: (data: any) => {
        // Navigate to the root route if there is no error
        this.router.navigate(['../events']).then(() => {
          // Do something after navigating
        });
      },
      error: (error: any) => {
        // Navigate to the 'add' route in case of an error
        this.router.navigate(['/']).then(() => {
          // Do something after navigating
        });
      }
    });
  }
  


}