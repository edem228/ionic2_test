import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AproposPage } from './apropos';

@NgModule({
  declarations: [
    AproposPage,
  ],
  imports: [
    IonicPageModule.forChild(AproposPage),
  ],
  exports: [
    AproposPage
  ]
})
export class AproposPageModule {}
