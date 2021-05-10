import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../../environments/environment';
import { User } from '../models/user';
import { UserEmail } from '../models/user-email';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(pageSize: number = 25, pageNumber: number = 0) {
    const headerInfo = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '.concat(
        localStorage.getItem('access_token') || ''
      ),
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    return this.http
      .get<any>(
        BASE_API_URL.concat(`/user/all?offset=${pageSize}&page=${pageNumber}`),
        requestOptions
      )
      .toPromise();
  }

  searchUsers(
    search: string = '',
    currentPage: number = 0,
    pageSize: number = 10,
    sortBy: string = 'userId',
    order: string = 'asc'
  ) {
    const headerInfo = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '.concat(
        localStorage.getItem('access_token') || ''
      ),
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    return this.http
      .get<any>(
        BASE_API_URL.concat(
          `/users/search?search=${search}&page=${currentPage}&offset=${pageSize}&sort=${sortBy}&order=${order}`
        ),
        requestOptions
      )
      .toPromise();
  }

  massCreateUsers(userArray: UserEmail[]) {
    const headerInfo = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '.concat(
        localStorage.getItem('access_token') || ''
      ),
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    let createUsers = this.http.post<any>(
      BASE_API_URL.concat(`/user/massCreate`),
      userArray,
      requestOptions
    );
    createUsers.subscribe();
  }

  createOneUser(user: UserEmail) {
    const headerInfo = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer '.concat(
        localStorage.getItem('access_token') || ''
      ),
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    let createUsers = this.http.post<any>(
      BASE_API_URL.concat(`/user/create`),
      user,
      requestOptions
    );
    createUsers.subscribe();
  }
}
