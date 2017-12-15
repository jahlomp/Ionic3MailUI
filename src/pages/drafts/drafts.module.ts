import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DraftsPage } from './drafts';

@NgModule({
  declarations: [
    DraftsPage,
  ],
  imports: [
    IonicPageModule.forChild(DraftsPage),
  ],
  exports: [
    DraftsPage
  ]
})
export class DraftsPageModule {}
