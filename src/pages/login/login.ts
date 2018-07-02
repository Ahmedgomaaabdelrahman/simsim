import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';
import { HomePage } from './../home/home';
import {TranslateService} from "@ngx-translate/core";
import { MainProvider } from './../../providers/main';
import { CommonProvider } from './../../providers/common';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email ;
  password;
  displayvalidation1 = 'none';
  displayvalidation2 = 'none';
  constructor(public _app:App,private keyboard: Keyboard,public platform: Platform,public CommonProvider : CommonProvider, public Main : MainProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }
  ionViewDidEnter() {
    
}
sx1() {
  this.displayvalidation1 = 'block';
}
sx2() {
  this.displayvalidation2 = 'block';
}
ionViewWillLeave() {
    this.platform.ready().then(() => {
      this.keyboard.disableScroll(false);
    }); 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gohome(){
    this.Main.logIn(this.email , this.password).subscribe((res)=>{
      if (res.success  == '1') {
        console.log(res);
        this.navCtrl.setRoot(HomePage);
        // this._app.getRootNav().setRoot(LoginPage);
        this.CommonProvider.presentToast(res.message);
        this.CommonProvider.saveUser(res.data);
        this.Main.customer = res.data;
        console.log(this.Main.customer)
      }
      else {
        this.CommonProvider.presentToast(res.message);
      }
     
    });
     
  }  
  valid(){
    document.getElementById("myInput").style.background = "yellow";
      console.log('validation')
  }
  accc(){
    document.getElementById('cont').style.backgroundImage = 'none';
  }
 
}
 