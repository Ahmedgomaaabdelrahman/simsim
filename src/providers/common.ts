import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public nativeStorage : Storage,private toastCtrl: ToastController,public http: HttpClient) {
    console.log('Hello CommonProvider Provider');
  }
  saveUser(user){
    this.nativeStorage.set('user', user)
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  }

  saveLang(Lang){
    this.nativeStorage.set('lang', Lang)
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  }

  presentToast(txt) {
    let toast = this.toastCtrl.create({
      message:txt,
      duration:3000
    }); 
    toast.present();
  }
  
  
}
