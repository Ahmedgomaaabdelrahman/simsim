import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { EditaccountPage } from '../editaccount/editaccount';
import { MainProvider } from './../../providers/main';
import { NativeStorage } from '@ionic-native/native-storage';
import { CommonProvider } from './../../providers/common';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  lang;
 
  public customer : any ;

  constructor(public NativeStorage : Storage,public CommonProvider:CommonProvider,public MainProvider : MainProvider,public translate:TranslateService,public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
   
   if(this.translate.getDefaultLang() == 'en'){
    this.lang = 'English';
   }
   else{
    this.lang = 'Arabic';
   }
    this.customer = this.MainProvider.customer;
    console.log(this.customer);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.customer = this.MainProvider.customer;
    console.log(this.customer);
  }
  

   back(){
    this.navCtrl.pop();  
  }
  checLang(lang) { 
    console.log('ennnn');
    if (lang == 'Arabic'){
      this.translate.setDefaultLang('ar');
      this.platform.setDir('rtl', true);
      this.CommonProvider.saveLang('ar');
      this.lang = 'Arabic';
    }
    else {
      this.translate.setDefaultLang('en');
     this.platform.setDir('ltr', true);
     this.CommonProvider.saveLang('en');
     this.lang = 'English';
    }
  }

  goedit(){
    this.navCtrl.push(EditaccountPage);
  }

  logOut(){
    this.customer.currentuser = null;
    this.NativeStorage.remove('user');
   this.platform.exitApp();
   
    console.log(this.customer.currentuser);
  }
}
