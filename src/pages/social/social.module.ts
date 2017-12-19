import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialPage } from './social';

@NgModule({
  declarations: [
    SocialPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialPage),
  ],
  exports: [
    SocialPage
  ]
})
export class SocialPageModule {}
