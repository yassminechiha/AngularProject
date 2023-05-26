import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { eventtype } from '../models/eventtype';
import {EventServiceService} from '../services/event-service.service';



@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  public event : eventtype = {} as eventtype ;
  public errorMessage : string | null = null;
  public eventId : string | null = null;


  constructor (private activateRoute:ActivatedRoute,
    private eventsService:EventServiceService,
    private router:Router){


  }
  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params )=> {
      this.eventId= params.get('eventId');//employeId kima l configuration du router //extraire lid du router
  
    });
    if(this.eventId){
      this.eventsService.getEvent(this.eventId).subscribe(data => {
        this.event=data;
      },(error)=>{
        this.errorMessage=error;
      })
    
    }
  }
    public updateSubmit(){
      if(this.eventId){
      this.eventsService.updateEvent(this.event,this.eventId).subscribe(data => {
        this.router.navigate(['/events']).then();
      } , (error)=>{
        this.errorMessage=error;
        this.router.navigate(['/edit']).then(); 
      });
  
     }
    }


}