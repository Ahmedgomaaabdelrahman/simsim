import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { MainProvider } from '../providers/main';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import { SplashPage } from '../pages/splash/splash';
import { HttpModule, Http } from '@angular/http';
import { CommonProvider } from '../providers/common';
import { IonicStorageModule } from '@ionic/storage';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    EditaccountPage,
    SplashPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
  TranslateModule.forChild(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
BrowserModule,
IonicModule.forRoot(MyApp, {
  scrollPadding: false,
  scrollAssist: true, 
  autoFocusAssist: false
}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    EditaccountPage,
    SplashPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainProvider,
    CommonProvider,
    Keyboard,
    
  ]
})
export class AppModule {}
