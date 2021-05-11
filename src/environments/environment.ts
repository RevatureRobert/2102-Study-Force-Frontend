// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://52.91.175.61'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// Base URL for Hosted UI for login and signup
export const BASE_URL_LOGIN_REGISTRATION = 'https://studyforce.auth.us-east-1.amazoncognito.com/login?client_id=1v2vmtuo6oiaace3vckil4cfqf&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=http://localhost:4200/oauth2/';
