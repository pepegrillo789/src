import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {
    this.showBanner();

  }

  showBanner()
  {
    const bannerConfig: AdMobFreeBannerConfig = {
    id: 'ca-app-pub-9782152749883298/8730836021',
    isTesting: true,
    autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare()
    .then(() => {
     this.admobFree.banner.show()
    })
    .catch(e => console.log(e));    
  }
}