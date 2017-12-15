import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SentPage } from './sent';

@NgModule({
  declarations: [
    SentPage,
  ],
  imports: [
    IonicPageModule.forChild(SentPage),
  ],
  exports: [
    SentPage
  ]
})
export class SentPageModule {}
