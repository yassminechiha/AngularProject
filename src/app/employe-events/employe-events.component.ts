import { Component } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { eventtype } from '../models/eventtype';

@Component({
  selector: 'app-employe-events',
  templateUrl: './employe-events.component.html',
  styleUrls: ['./employe-events.component.css']
})
export class EmployeEventsComponent {
  public events: eventtype[] = [];
  public errorMessage: string | null = null;

  constructor(private eventsService: EventServiceService) {}

  ngOnInit():void{ //method that is automatically called when the component is initialized.
    this.getAllEventsFromServer();
 

   }
   public getAllEventsFromServer(){
    this.eventsService.getAllEvents().subscribe({next :(data :any) =>
      this.events=data, //fetches a list of employees from a service and stores them in an array
     error :((error : any) => this.errorMessage),
     complete:()=>console.log(this.events)
    });
   }


}
