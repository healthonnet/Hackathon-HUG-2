import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Settings} from "../../providers/settings/settings";
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { TranslateService } from '@ngx-translate/core';

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

  vocalize=true;

  constructor(public navCtrl: NavController, private translate: TranslateService, public settings: Settings, private tts: TextToSpeech) {
    setTimeout(() => {
      const locales = {
        en: "en-UK",
        fr: "fr-FR",
        es: "es-ES",
        it: "it-IT",
        de: "de-DE",
        pt: "pt-PT",
      };

      this.tts.speak({
        text: "Je s'appelle Groot",
        locale: locales[this.settings.allSettings.aux_lang],
        rate: 1
      }).then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
    }, 1000);
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
