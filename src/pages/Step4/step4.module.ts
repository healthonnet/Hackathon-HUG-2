import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Step4Page } from './step4';

@NgModule({
  declarations: [
    Step4Page,
  ],
  imports: [
    IonicPageModule.forChild(Step4Page),
    TranslateModule.forChild()
  ],
  exports: [
    Step4Page
  ]
})
export class WelcomePageModule { }
