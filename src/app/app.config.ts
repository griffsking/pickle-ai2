import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp, getApp, FirebaseApp } from '@angular/fire/app';
import {
  ReCaptchaEnterpriseProvider,
  initializeAppCheck,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAI, GoogleAIBackend, provideAI } from '@angular/fire/ai';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environments';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

declare global {
  var FIREBASE_APPCHECK_DEBUG_TOKEN: string;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() =>
      initializeApp(environment.firebase), 
    ),
    // Turn on app check for Vertex AI in Firebase
    // provideAppCheck(() => {
      // TODO: don't use debug token in prod
      // self.FIREBASE_APPCHECK_DEBUG_TOKEN = environment.debug_token;

      // const appCheck = initializeAppCheck(getApp(), {
      //   provider: new ReCaptchaEnterpriseProvider("your site key here"),
      //   isTokenAutoRefreshEnabled: true,
      // });
      // return appCheck;
    // }),
    provideAI(() => getAI(inject(FirebaseApp), {backend: new GoogleAIBackend()})),
    provideAuth(() => getAuth()),
    provideFirestore(() => 
      initializeFirestore(getApp(), {
        localCache: persistentLocalCache({
          tabManager: persistentMultipleTabManager(),
        }),
      })
    ),
    provideAnimationsAsync(), 
  ],
};
