import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Settings} from "../../providers/settings/settings";

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'step3.html'
})
export class Step3Page {

  // If we need an opt-in for the next step
  needValidation = true;
  mysizeclass='small';
  mycolor = { small:'default', medium:'default', large:'default'}
  constructor(public navCtrl: NavController,  public settings: Settings) { }

  setsize(size) {
    this.settings.dynamicSize.next(size);
    this.settings.setValue('aux_size',size);
    this.mycolor.small='default';
    this.mycolor.medium='default';
    this.mycolor.large='default';
    this.mycolor[size]='secondary';

    console.log('aux_size is set to '+size);
    this.mysizeclass=size;
  }

  continue() {
    this.navCtrl.push('Step4Page');
  }
  back() {
    this.navCtrl.pop();
  }
}
