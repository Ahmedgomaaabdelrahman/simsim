import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from './../settings/settings';
import { MainProvider } from './../../providers/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons;
  products;
  earnings;
  product_owned;product_sold;saved_fav;product_return;
  money_earn;money_simsim;cash_money;earn_credit;

  constructor(public main:MainProvider,public navCtrl: NavController) {
  this.icons = 'products';
  console.log(this.main.customer.id);
  this.main.viewProducts(this.main.customer.id).subscribe(res=>{

    console.log("producs res",res)
    this.products = res.data;
    this.product_owned = res.data.product_owned;
    this.product_sold = res.data.product_sold;
    this.saved_fav = res.data.saved_fav;
    this.product_return = res.data.product_return;

    console.log(this.products);
    console.log(res.data);
    console.log(res.message)
  });
  this.main.viewEarnings(this.main.customer.id).subscribe(res=>{
    this.earnings = res.data;
    this.money_earn = res.data.money_earn;
    this.money_simsim = res.data.money_simsim;
    this.cash_money = res.data.cash_money;
    this.earn_credit = res.data.earn_credit;

    console.log(this.earnings);
  })
  } 

  back(){
    this.navCtrl.pop(); 
  }
   
  setting(){
    this.navCtrl.push(SettingsPage);
  }
}
