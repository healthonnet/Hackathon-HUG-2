import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HrHugPage } from './hrhug';

@NgModule({
  declarations: [
    HrHugPage,
  ],
  imports: [
    IonicPageModule.forChild(HrHugPage),
    TranslateModule.forChild()
  ],
  exports: [
    HrHugPage
  ]
})
export class WelcomePageModule { }
