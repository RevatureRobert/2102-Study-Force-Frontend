import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * Service was created to redirect to an external URL, AWS Cognito hosted Login page
 */
export class RedirectGuardService implements CanActivate {

  constructor(private router: Router) { }

/**
 * This is what is used to redirect the page to an external page
 * @param route grabs the external route data
 * @returns true or false if it can activate the external route you are looking for
 */
  canActivate(route: ActivatedRouteSnapshot): boolean {

    window.location.href = route.data['externalUrl'];
    return true;
    
  }


}
