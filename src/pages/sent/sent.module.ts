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
})
export class SentPageModule {}
