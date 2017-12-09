import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HrImadPage } from './hrimad';

@NgModule({
  declarations: [
    HrImadPage,
  ],
  imports: [
    IonicPageModule.forChild(HrImadPage),
    TranslateModule.forChild()
  ],
  exports: [
    HrImadPage
  ]
})
export class WelcomePageModule { }
