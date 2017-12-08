import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Step5Page } from './step5';

@NgModule({
  declarations: [
    Step5Page,
  ],
  imports: [
    IonicPageModule.forChild(Step5Page),
    TranslateModule.forChild()
  ],
  exports: [
    Step5Page
  ]
})
export class WelcomePageModule { }
