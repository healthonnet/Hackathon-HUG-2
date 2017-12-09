import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Settings} from "../../providers/settings/settings";
import { TranslateService } from '@ngx-translate/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Platform } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-step5',
  templateUrl: 'step5.html'
})
export class Step5Page {

  // If we need an opt-in for the next step
  needValidation = true;
  languagelevel = 'A1';
  speed = 1;

  constructor(public navCtrl: NavController,  public settings: Settings, private translate: TranslateService, private tts: TextToSpeech, private plt: Platform) {
      const locales = {
        en: "en-GB",
        fr: "fr-FR",
        es: "es-ES",
        it: "it-IT",
        de: "de-DE",
        pt: "pt-PT",
      };
      if (this.plt.is('ios')) {
        this.speed = 1.5;
      }
      if (this.settings.allSettings.aux_vocalize) {
        this.translate.get('AUX_TEXT_HAUT_STEP5').subscribe((value: string) => {
          this.tts.speak({
            text: value,
            locale: locales[this.settings.allSettings.aux_lang],
            rate: this.speed
          }).then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        });
      }
  }

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
