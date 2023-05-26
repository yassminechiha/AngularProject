import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { eventtype } from '../models/eventtype';



@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private serverUrl : string = 'http://localhost:3000'; //json-server url

  constructor(private httpClient : HttpClient) { 
}

public getAllEvents(): Observable<eventtype[]>{
  let dataURL:string =`${this.serverUrl}/events` ;
  return this.httpClient.get<eventtype[]>(dataURL).pipe(catchError(this.handleError));

}

public getEvent(eventId:string): Observable<eventtype>{
  let dataURL:string =`${this.serverUrl}/events/${eventId}` ;
  return this.httpClient.get<eventtype>(dataURL).pipe(catchError(this.handleError));

}






//create employe
//howa yasna3 id wahdou

public createEvent(event :eventtype): Observable<eventtype> {
  let dataURL:string =`${this.serverUrl}/events` ;
  return this.httpClient.post<eventtype>(dataURL,event).pipe(catchError(this.handleError));

}

public deleteEvent(eventId:string): Observable<{}> {
  let dataURL:string =`${this.serverUrl}/events/${ eventId}`;
  return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));

}


//update employe
//ena nhotlou l id mtaa employe li bech nbadlou

public updateEvent(event :eventtype , eventId:string): Observable<eventtype> {
  let dataURL:string =`${this.serverUrl}/events/${ eventId}` ;
  return this.httpClient.put<eventtype>(dataURL,event).pipe(catchError(this.handleError));

}




//error handling
public handleError(error: HttpErrorResponse) {
  let errorMessage;
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage =  `${error.error.message}`;
  } else {
    // Server-side error
    errorMessage = `${error.message}`;
  }
  
  return throwError(errorMessage);
}
}