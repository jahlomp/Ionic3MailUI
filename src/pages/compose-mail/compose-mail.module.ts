import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComposeMailPage } from './compose-mail';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    ComposeMailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComposeMailPage),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  exports: [
    ComposeMailPage
  ]
})
export class ComposeMailPageModule { }
