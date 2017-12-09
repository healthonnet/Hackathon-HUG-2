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
  selector: 'page-hrimad',
  templateUrl: 'hrimad.html'
})
export class HrImadPage {

  aux_contrast='blank';
  aux_size='large';
  aux_lang='fr';
  aux_vocalize=true;
  aux_languagelevel='a1'

  constructor(public navCtrl: NavController,  public settings: Settings, private translate: TranslateService, private tts: TextToSpeech, private plt: Platform) {
    settings.load().then(() => {
      this.aux_lang = this.settings.allSettings.aux_lang
      this.aux_contrast = this.settings.allSettings.aux_contrast
      this.aux_size = this.settings.allSettings.aux_size
      this.aux_vocalize = this.settings.allSettings.aux_vocalize
      this.aux_languagelevel = this.settings.allSettings.aux_languagelevel
    })
  }
}
