import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Step2Page } from './step2';

@NgModule({
  declarations: [
    Step2Page,
  ],
  imports: [
    IonicPageModule.forChild(Step2Page),
    TranslateModule.forChild()
  ],
  exports: [
    Step2Page
  ]
})
export class WelcomePageModule { }
