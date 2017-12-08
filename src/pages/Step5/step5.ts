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
  templateUrl: 'step5.html'
})
export class Step5Page {

  // If we need an opt-in for the next step
  needValidation = true;
  languagelevel = 'A1';
  constructor(public navCtrl: NavController,  public settings: Settings) { }

  setlanguagelevel(languagelevel) {
    this.settings.setValue('aux_languagelevel',languagelevel);
    console.log('aux_languagelevel is set to '+languagelevel);
    this.languagelevel=languagelevel;
  }

  show_setting(s){console.log(s+" is set to "+this.settings.allSettings[s])}

  continue() {
    //this.navCtrl.push('TabsPage');
    this.show_setting('aux_lang');
    this.show_setting('aux_contrast');
    this.show_setting('aux_size');
    this.show_setting('aux_vocalize');
    this.show_setting('aux_languagelevel');
    
  }
  back() {
    this.navCtrl.pop();
  }
}
