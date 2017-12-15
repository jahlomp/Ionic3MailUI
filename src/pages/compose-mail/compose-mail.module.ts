import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposeMailPage } from './compose-mail';

@NgModule({
  declarations: [
    ComposeMailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComposeMailPage),
  ],
  exports: [
    ComposeMailPage
  ]
})
export class ComposeMailPageModule {}
