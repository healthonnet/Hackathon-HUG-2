import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Settings} from "../../providers/settings/settings";
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-step4',
  templateUrl: 'step4.html'
})
export class Step4Page {

  vocalize=true;
  needValidation=true;
  speed = 1;
  constructor(public navCtrl: NavController, private translate: TranslateService, public settings: Settings, private tts: TextToSpeech, private plt: Platform) {
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
    settings.load().then(() => {
      if (this.settings.allSettings.aux_vocalize) {
        this.translate.get('AUX_TEXT_HAUT_STEP4').subscribe((value: string) => {
          this.tts.speak({
            text: value,
            locale: locales[this.settings.allSettings.aux_lang],
            rate: this.speed
          }).then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        });
      }
    });
  }

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
