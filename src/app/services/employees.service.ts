import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, throwError } from 'rxjs';
import { employetype } from '../models/employetype';




@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private serverUrl : string = 'http://localhost:3000'; //json-server url

  constructor(private httpClient : HttpClient) { 
}
//get all employees
public getAllEmployees(): Observable<employetype[]>{
  let dataURL:string =`${this.serverUrl}/employees` ;
  return this.httpClient.get<employetype[]>(dataURL).pipe(catchError(this.handleError));

}
//get employee
public getEmployee(employeId:string): Observable<employetype>{
  let dataURL:string =`${this.serverUrl}/employees/${employeId}` ;
  return this.httpClient.get<employetype>(dataURL).pipe(catchError(this.handleError));

}
getEmployeeEmail(email: string): Observable<employetype> {
  const url = `${this.serverUrl}/employees?email=${email}`;
  return this.httpClient.get<employetype>(url).pipe(catchError(this.handleError));
}



//create employe
//howa yasna3 id wahdou

public createEmploye(employe :employetype): Observable<employetype> {
  let dataURL:string =`${this.serverUrl}/employees` ;
  return this.httpClient.post<employetype>(dataURL,employe).pipe(catchError(this.handleError));

}


public deleteEmployee(employeId:string): Observable<{}> {
  let dataURL:string =`${this.serverUrl}/employees/${ employeId}`;
  return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));

}

//update employe
//ena nhotlou l id mtaa employe li bech nbadlou

public updateEmploye(employe :employetype , employeId:string): Observable<employetype> {
  let dataURL:string =`${this.serverUrl}/employees/${ employeId}` ;
  return this.httpClient.put<employetype>(dataURL,employe).pipe(catchError(this.handleError));

}

public updateEmployeeProjects(newProjectIds: number[], employeeId: string | undefined): Observable<employetype> {
  let dataURL: string = `${this.serverUrl}/employees/${employeeId}`;
  
  // First retrieve the current employee's projects
  return this.httpClient.get<employetype>(dataURL).pipe(
    mergeMap(employee => {
      const currentProjectIds = employee.projects || [];
      
      // Merge the current and new project IDs
      const allProjectIds = [...currentProjectIds, ...newProjectIds];
      
      // Remove any duplicates
      const uniqueProjectIds = Array.from(new Set(allProjectIds));
      
      // Make the PUT request with the updated project IDs
      return this.httpClient.put<employetype>(dataURL, { projects: uniqueProjectIds }).pipe(
        catchError(this.handleError)
      );
    }),
    catchError(this.handleError)
  );
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