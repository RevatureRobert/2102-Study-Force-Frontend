import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../../environments/environment';
import { UserEmail } from '../models/user-email';

@Injectable({
  providedIn: 'root'
})
/**
 * Service used for all CRUD operations related to users
 * @author Steven Ceglarek
 */
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Calls to a /user/me route to grab the users info who is currently logged in
   * @returns the user who is logged in
   */
  getLoggedInUser() {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<any>(BASE_API_URL.concat('/user/me'), requestOptions).toPromise();

  }

  /**
   * Used to grab all Users currently in database
   * @param pageSize the page size for pagination
   * @param pageNumber the page for pagination
   * @returns all users from database
   */
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

  /**
   * To create many users at one time
   * @param userArray an array of Users that will be created
   */
  massCreateUsers(userArray: UserEmail[]) {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    let createUsers = this.http.post<any>(BASE_API_URL.concat(`/user/massCreate`), userArray, requestOptions);
    createUsers.subscribe();

  }

  /**
   * To create one user
   * @param user the user being created
   */
  createOneUser(user: UserEmail) {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('access_token') || "")
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    let createUsers = this.http.post<any>(BASE_API_URL.concat(`/user/create`), user, requestOptions);
    createUsers.subscribe();
  }


}
