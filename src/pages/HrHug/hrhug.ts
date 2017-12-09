import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Settings} from "../../providers/settings/settings";
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hrhug',
  templateUrl: 'hrhug.html'
})
export class HrHugPage {

  // If we need an opt-in for the next step
  needValidation = true;
  mysizeclass='small';
  speed = 1;
  mycolor = { small:'default', medium:'default', large:'default'};
  constructor(public navCtrl: NavController,  public settings: Settings, private translate: TranslateService, private tts: TextToSpeech, private plt: Platform) {
  }

}
