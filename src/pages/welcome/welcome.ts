import { OnInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  templateUrl: 'welcome.html'
})

export class WelcomePage implements OnInit {

  needValidation = true;
  text_bas="Français";
  lang="fr";
  languages = {
      fr:'Français',
      en:'English',
      de:'Deutsch',
      pt:'Português',
      it:'Italiano',
      es:'Español'
  }

  constructor(public navCtrl: NavController, public settings: Settings, private translate: TranslateService) {
  }

  ngOnInit(){
    // Force default for hackathon purpuse
    //this.settings.setValue('aux_lang','fr');
    this.settings.load().then(() => {
      this.lang = 'fr';
      this.setlang(this.lang);
    });
  }

  setlang(lang) {
    this.settings.setValue('aux_lang',lang);
    console.log('aux_lang is set to '+lang);
    this.text_bas = this.languages[lang];
    this.translate.use(lang);
    this.lang = lang

  }
  continue() {
    this.setlang(this.lang);
    this.navCtrl.push('Step2Page');
  }

}
