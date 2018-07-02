import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainProvider } from '../../providers/main';
import { HomePage } from './../home/home';


@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class EditaccountPage {
  public customer : any ;
  displayvalidation1 = 'none';
  displayvalidation2 = 'none';
  displayvalidation3 = 'none';
  displayvalidation4 = 'none';
  displayvalidation5 = 'none';
  displayvalidation6 = 'none';
  constructor(public MainProvider : MainProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.customer = this.MainProvider.customer ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaccountPage');
  }
  back(){
    this.navCtrl.pop();  
  }
  sx1() {
    this.displayvalidation1 = 'block';
  }
  sx2() {
    this.displayvalidation2 = 'block';
  }
  sx3() {
    this.displayvalidation3 = 'block';
  }
  sx4() {
    this.displayvalidation4 = 'block';
  }
  sx5() {
    this.displayvalidation5 = 'block';
  }
  sx6() {
    this.displayvalidation6 = 'block';
  }
  
  updateUser(inputs:any){
    console.log()
    this.MainProvider.updateAccount(inputs.firstname,inputs.lastname,inputs.phone,inputs.email,this.customer.id,inputs.Password,inputs.newpass).
    subscribe(res=>{
      console.log(res);
      this.MainProvider.customer = res.data[0];
      this.navCtrl.setRoot(HomePage);
    })
  }
}
