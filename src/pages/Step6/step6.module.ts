import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { Step6Page } from './step6';

@NgModule({
  declarations: [
    Step6Page,
  ],
  imports: [
    IonicPageModule.forChild(Step6Page),
    TranslateModule.forChild()
  ],
  exports: [
    Step6Page
  ]
})
export class WelcomePageModule { }
