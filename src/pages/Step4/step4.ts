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
  templateUrl: 'step4.html'
})
export class Step4Page {

  // If we need an opt-in for the next step
  needValidation = true;
  vocalize=true;
  constructor(public navCtrl: NavController,  public settings: Settings) { }

  setvocalize(vocalize) {
    this.settings.setValue('aux_vocalize',vocalize);
    this.vocalize=vocalize;
    console.log('aux_vocalize is set to '+vocalize);
  }

  continue() {
    this.navCtrl.push('Step5Page');
  }
  back() {
    this.navCtrl.pop();
  }
}
