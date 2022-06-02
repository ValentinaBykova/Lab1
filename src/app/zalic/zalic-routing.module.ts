import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ZalicPage } from './zalic.page';

const routes: Routes = [
  {
    path: '',
    component: ZalicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class ZalicPageRoutingModule {}
