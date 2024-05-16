import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NdmajobService {

  constructor(private http: HttpClient) { }

  jobs = [
    'Developer',
    'Manager',
    'HR'
  ]



  sendData(data: any): Observable<any> {
    return this.http.post('https://dummy.restapiexample.com/api/v1/create', data)  //replace url to api url
      .pipe(
        catchError(this.handleError) // Pass the error handler function to catchError
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong');
  }

}
