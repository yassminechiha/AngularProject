import { Component } from '@angular/core';
import { eventtype } from '../models/eventtype';
import {EventServiceService} from '../services/event-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
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
   //erreuur!!
   public clickDeleteEvent(eventId: string | undefined ) {
    if (eventId) { // add this check
      this.eventsService.deleteEvent(eventId).subscribe(
        (data) => {
          this.getAllEventsFromServer();
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  
  }