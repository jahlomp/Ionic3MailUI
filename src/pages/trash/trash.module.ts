import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrashPage } from './trash';

@NgModule({
  declarations: [
    TrashPage,
  ],
  imports: [
    IonicPageModule.forChild(TrashPage),
  ],
})
export class TrashPageModule {}
