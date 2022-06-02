import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZalicPageRoutingModule } from './zalic-routing.module';

import { ZalicPage } from './zalic.page';
import { MyHeaderComponent } from '../my-header/my-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZalicPageRoutingModule
  ],
  declarations: [ZalicPage, MyHeaderComponent]
})
export class ZalicPageModule {}
