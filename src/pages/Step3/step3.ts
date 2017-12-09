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
  templateUrl: 'step3.html'
})
export class Step3Page {

  // If we need an opt-in for the next step
  needValidation = true;
  mysizeclass='small';
  mycolor = { small:'default', medium:'default', large:'default'}
  constructor(public navCtrl: NavController,  public settings: Settings, private translate: TranslateService, private tts: TextToSpeech) {
      if (this.settings.allSettings.aux_vocalize) translate.get('AUX_TEXT_HAUT_STEP3').subscribe((value: string) => {
        //=> 'hello world'
        console.log(value);
        this.tts.speak({
          text: value,
          locale: locales[this.settings.allSettings.aux_lang],
          rate: 1
        }).then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
      });
   }

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
