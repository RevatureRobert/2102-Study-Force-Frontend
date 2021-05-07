import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})

/**
 * User service used in communication with backend API for all user resources
 */
export class UserServiceService {

  constructor(private http:HttpClient) { }

  /**
   * Gets a user by their user id by calling backend API
   * @param userId The id of the user being retrieved
   * @returns A promise of type any containing the json representation of the retrieved user, or empty json if no user was found with that id
   */
  getUserByUserId(userId:number):Promise<any>{
    return this.http.get<any>(BASE_API_URL.concat(`/users/${userId}`)).toPromise();
  }

  /**
   * Updates a user's active status by calling backend API
   * @param active The user's new active status
   * @param user The user whose information is being updated
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserActive(active:boolean, user:User):Promise<any>{
    const body:string = `{ "userId": ${user.id}, "active": ${active} }`;
    return this.http.put<any>(BASE_API_URL.concat('/users/active'), body).toPromise();
  }

  /**
   * Updates a user's name by calling backend API
   * @param name The user's new name
   * @param user The user whose information is being updated
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserName(name:string, user:User):Promise<any>{
    const body:string = `{ "userId": ${user.id}, "name": ${name} }`;
    return this.http.put<any>(BASE_API_URL.concat('/users/name'), body).toPromise();
  }

  /**
   * Updates a user's authority by calling backend API
   * @param authority The user's new authority
   * @param user The user whose information is being updated
   * @returns A promise of type any containing the json representation of the updated user
   */
  updateUserAuthority(authority:string, user:User):Promise<any>{
    if(authority != "USER" && authority != "ADMIN" && authority != "SUPER_ADMIN"){
      throw new TypeError;
    }
    const body:string = `{ "userId": ${user.id}, "authority": ${authority} }`;
    return this.http.put<any>(BASE_API_URL.concat('/users/authority'), body).toPromise();
  }
}
