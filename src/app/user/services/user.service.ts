import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserEmail } from '../models/user-email';


@Injectable({
  providedIn: 'root',
})
/**
 * Service used for all CRUD operations related to users
 * @author Steven Ceglarek
 */
export class UserService {

  private apiUrl = environment.apiUrl;

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
        this.apiUrl.concat(`/user/all?offset=${pageSize}&page=${pageNumber}`),
        requestOptions
      )
      .toPromise();
  }

  /**
   * Calls to a /user/me route to grab the users info who is currently logged in
   * @returns the user who is logged in
   */
  getLoggedInUser() {
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
      .get<any>(this.apiUrl.concat('/user/me'), requestOptions)
      .toPromise();
  }

  /**
   * Used to grab all Users currently in database
   * @param pageSize the page size for pagination
   * @param pageNumber the page for pagination
   * @returns all users from database
   */
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
        this.apiUrl.concat(
          `/users/search?search=${search}&page=${currentPage}&offset=${pageSize}&sort=${sortBy}&order=${order}`
        ),
        requestOptions
      )
      .toPromise();
  }

  /**
   * To create many users at one time
   * @param userArray an array of Users that will be created
   */
  massCreateUsers(userArray: string[]) {

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

    return this.http.post<any>(this.apiUrl.concat(`/users/bulk`), userArray, requestOptions).toPromise();


  }

  /**
   * To create one user
   * @param user the user being created
   */
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

    return this.http.post<any>(this.apiUrl.concat(`/user/create`), user, requestOptions).toPromise();

  }

  /**
   * Gets a user by their user id by calling backend API
   * @param userId The id of the user being retrieved
   * @returns A promise of type any containing the json
   * representation of the retrieved user, or empty json
   * if no user was found with that id
   */
  getUserByUserId(userId: number): Promise<any> {
    return this.http
      .get<any>(this.apiUrl.concat(`/users/${userId}`))
      .toPromise();
  }

  /**
   * Updates a user's active status by calling backend API
   * @param active The user's new active status
   * @param userId The user whose information is being updated
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserActive(active: boolean, userId: number): Promise<any> {
    const body = { userId, active };
    return this.http
      .put<any>(this.apiUrl.concat('/users/active'), body)
      .toPromise();
  }

  /**
   * Updates a user's name by calling backend API
   * @param name The user's new name
   * @param userId The id of the user whose information is being updated
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserName(name: string, userId: number): Promise<any> {
    const body = { userId, name };
    return this.http
      .put<any>(this.apiUrl.concat('/users/name'), body)
      .toPromise();
  }

  /**
   * Updates a user's subscription status by calling backend API
   * @param userId The id of the user whose information is being updated
   * @param subscribedFlashcard Boolean indicating weather or not this user is subscribed to flashcards
   * @param subscribedStacktrace Boolean indicating weather or not this user is subscribed to stacktraces
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserSubscriptions(
    userId: number,
    subscribedFlashcard: boolean,
    subscribedStacktrace: boolean
  ): Promise<any> {
    const body = {
      userId,
      subscribedFlashcard,
      subscribedStacktrace,
    };
    return this.http
      .put<any>(this.apiUrl.concat('/users/subscription'), body)
      .toPromise();
  }

  /**
   * Updates a user's authority by calling backend API
   * @param authority The user's new authority
   * @param userId The id of the user whose information is being updated
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserAuthority(authority: string, userId: number): Promise<any> {
    if (
      authority !== 'USER' &&
      authority !== 'ADMIN' &&
      authority !== 'SUPER_ADMIN'
    ) {
      throw new TypeError();
    }
    const body = { userId, authority };
    return this.http
      .put<any>(this.apiUrl.concat('/users/authority'), body)
      .toPromise();
  }
}
