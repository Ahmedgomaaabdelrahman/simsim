import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { SplashPage } from '../pages/splash/splash';
import { CommonProvider } from './../providers/common';
import { NativeStorage } from '@ionic-native/native-storage';
import { MainProvider } from './../providers/main';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  @ViewChild(Nav) nav: Nav;
  constructor(private keyboard: Keyboard,public MainProvider:MainProvider,public storage : Storage,public common : CommonProvider,modalCtrl: ModalController,public translate:TranslateService,platform: Platform,public platform1: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
     this.keyboard.disableScroll(true);
      let splash = modalCtrl.create(SplashPage);
            splash.present();
          
            this.getLang();
      // platform.setDir('rtl', true);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
      this.storage.get('user')
      .then(
        data => {
          console.log(data);
          if(data){
            this.MainProvider.customer = data;
            // this.rootPage = HomePage;
            this.nav.setRoot(HomePage);
          }
          else if (data == null){
            this.nav.setRoot(LoginPage);
          }
          
        },
        error => console.error(error)
    );
      // splashScreen.hide();
      // this.rootPage = LoginPage;
      
      // platform.setDir('rtl', true);

    });
   
        //  this.rootPage = LoginPage;
  }

  getLang(){
    this.storage.get('lang') 
    .then(
      data => {
        if(data){ 

          this.MainProvider.lang = data;
          this.translate.setDefaultLang(data);
          if(data == 'ar'){
            this.platform1.setDir('rtl', true);
          }
          else  if(data == 'en') {
            this.platform1.setDir('ltr', true);
          }
         
        }
        else{
          this.MainProvider.lang = 'en';
          this.translate.setDefaultLang('en');
         this.platform1.setDir('ltr', true);
        }
        
      },
      error => console.error(error)
  );
  }
 
}

