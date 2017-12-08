import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Step3Page } from './step3';

@NgModule({
  declarations: [
    Step3Page,
  ],
  imports: [
    IonicPageModule.forChild(Step3Page),
    TranslateModule.forChild()
  ],
  exports: [
    Step3Page
  ]
})
export class WelcomePageModule { }
