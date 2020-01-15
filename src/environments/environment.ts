// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseUrlService: 'http://localhost:5000/game-of-the-year-762d7/us-central1',
  firebase: {
    apiKey: "AIzaSyCzJ-wGaRIdzaTZhmpDgaHHocZSV6W0O7E",
    authDomain: "game-of-the-year-762d7.firebaseapp.com",
    databaseURL: "https://game-of-the-year-762d7.firebaseio.com",
    projectId: "game-of-the-year-762d7",
    storageBucket: "game-of-the-year-762d7.appspot.com",
    messagingSenderId: "605327241285",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
