import { Component, ViewChild, HostBinding } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';


import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Step2', component: 'Step2Page' },
    { title: 'Step3', component: 'Step3Page' },
    { title: 'Step4', component: 'Step4Page' },
    { title: 'Step5', component: 'Step5Page' },
    { title: 'Step6', component: 'Step6Page' },
    { title: 'HrHug', component: 'HrHugPage' },
    { title: 'HrImad', component: 'HrImadPage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
  ]

  @HostBinding('class.human-responsive-dark') isDark;
  @HostBinding('class.human-responsive-blue') isBlue;
  @HostBinding('class.human-responsive-light') isLight;
  @HostBinding('class.human-responsive-medium') isMedium;
  @HostBinding('class.human-responsive-large') isLarge;

  settings:Settings;

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    settings.dynamicContrast
      .subscribe((value) => {
        this.changeTheme(value);
      });
    settings.dynamicSize
      .subscribe((value) => {
        this.changeSize(value);
      });
    // Get default language in settings
    settings.load().then(() => {
      this.initTranslate(settings.allSettings.aux_lang);
      // We reset each type for explanations purposes
      // settings.dynamicContrast.next(settings.allSettings.aux_contrast);
      // settings.dynamicSize.next(settings.allSettings.aux_size);
    });

  }

  ionViewWillLeave() {
    this.settings.dynamicSize.unsubscribe();
    this.settings.dynamicContrast.unsubscribe();
  }

  changeTheme(theme): void {
    switch(theme) {
      case "dark": {
        this.isBlue = false;
        this.isLight = false;
        this.isDark  = true;
        break;
      }
      case "blue": {
        this.isBlue = true;
        this.isLight = false;
        this.isDark  = false;
        break;
      }
      case "light": {
        this.isBlue = false;
        this.isLight = true;
        this.isDark  = false;
        break;
      }
      default: {
        this.isBlue = false;
        this.isLight = false;
        this.isDark  = false;
        break;
      }
    }
  }

  changeSize(size): void {
    switch(size) {
      case "medium": {
        this.isMedium = true;
        this.isLarge = false;
        break;
      }
      case "large": {
        this.isMedium = false;
        this.isLarge = true;
        break;
      }
      default: {
        this.isMedium =  false;
        this.isLarge =  false;
      }
    }
  }

  initTranslate(defaultLanguage) {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('fr');
    this.translate.use("de");
    this.translate.use("pt");
    this.translate.use("en");
    this.translate.use("it");
    this.translate.use("es");
    this.translate.use("fr");

    /*
      We reset each time for hackathon purpose
    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use(defaultLanguage); // Set your language here
    }*/

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
