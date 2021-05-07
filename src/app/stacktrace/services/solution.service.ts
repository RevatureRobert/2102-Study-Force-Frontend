import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolutionService{

    // Set the headers
    httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": 'application/json'//,
      //"Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
    });

    // Appended the service endpoint to the base url
    apiServerUrl = environment.apiUrl.concat("/stacktrace");
}
