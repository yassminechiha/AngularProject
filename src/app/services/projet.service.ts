import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { projettype } from '../models/projettype';



@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private serverUrl : string = 'http://localhost:3000'; //json-server url

  constructor(private httpClient : HttpClient) { 
}
//get all employees
public getAllProjects(): Observable<projettype[]>{
  let dataURL:string =`${this.serverUrl}/projects` ;
  return this.httpClient.get<projettype[]>(dataURL).pipe(catchError(this.handleError));

}
//get employee
public getprojet(projetid:String): Observable<projettype>{
  let dataURL:string =`${this.serverUrl}/projects/${projetid}` ;
  return this.httpClient.get<projettype>(dataURL).pipe(catchError(this.handleError));

}


//create employe
//howa yasna3 id wahdou

public createProject(projet :projettype): Observable<projettype> {
  let dataURL:string =`${this.serverUrl}/projects` ;
  return this.httpClient.post<projettype>(dataURL,projet).pipe(catchError(this.handleError));

}


public deleteProject(projetid:string): Observable<{}> {
  let dataURL:string =`${this.serverUrl}/projects/${ projetid}`;
  return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));

}

//update employe
//ena nhotlou l id mtaa employe li bech nbadlou
/*
public updateEmploye(employe :projettype , employeId:string): Observable<projettype> {
   let dataURL:string =`${this.serverUrl}/projects/${ employeId}` ;
  
}*/
public updateProjet(projet :projettype , projetId:string): Observable<projettype> {
  let dataURL:string =`${this.serverUrl}/Projects/${ projetId}` ;
  return this.httpClient.put<projettype>(dataURL,projet).pipe(catchError(this.handleError));

}



//error handling
public handleError(error: HttpErrorResponse) {
  let errorMessage;
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage =  error.error.message;
  } else {
    // Server-side error
    errorMessage = error.message;
  }
  
  return throwError(errorMessage);
}

}