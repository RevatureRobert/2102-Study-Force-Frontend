import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../../environments/environment';
import { UserEmail } from '../models/user-email';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(pageSize:number = 25, pageNumber:number = 0) {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<any>(BASE_API_URL.concat(`/user/all?offset=${pageSize}&page=${pageNumber}`), requestOptions).toPromise();
  }


  massCreateUsers(userAdminArray: UserEmail[], userEmployeeArray: UserEmail[]) {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    let createAdmins = this.http.post<any>(BASE_API_URL.concat(`/user/massCreate`), userAdminArray, requestOptions);
    createAdmins.subscribe();
    let createEmployees = this.http.post<any>(BASE_API_URL.concat(`/user/massCreate`), userEmployeeArray, requestOptions);
    createEmployees.subscribe();

  }


}
