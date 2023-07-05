// Copyright (c) 2023 Sourcefuse Technologies
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AUTH_BASE_URL: 'http://localhost:3001/',
  PUBLISH_KEY: 'pub-c-e0439132-835f-4e74-842a-ae2e0722956e',
  SUBSCRIBE_KEY: 'sub-c-5f111854-f2f1-477a-9ee6-4ef612b44faf',
  CHAT_ROOM: '7f1a3734-a063-4fdc-3d23-169c22d08b6b',
  CHAT_FACADE_BASE_URL: 'http://localhost:3000',
  SSL:true,
  LOG_VERBOSITY:true,
  UUID:'3822965c-2772-4a68-add2-b0f9dbc63b59',
  APP_ENV:'development',
  APP_BUNDLE_ID:'angular app'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
