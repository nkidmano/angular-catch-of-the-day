// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyCyz9lKvLJKHEpCirTV9n6YtU_e9-wfZ4s',
    authDomain: 'catch-of-the-day-eias-duong.firebaseapp.com',
    databaseURL: 'https://catch-of-the-day-eias-duong.firebaseio.com',
    projectId: 'catch-of-the-day-eias-duong',
    storageBucket: 'catch-of-the-day-eias-duong.appspot.com',
    messagingSenderId: '576916684139'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
