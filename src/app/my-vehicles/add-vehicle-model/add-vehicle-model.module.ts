import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVehicleModelPage } from './add-vehicle-model.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehicleModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVehicleModelPage]
})
export class AddVehicleModelPageModule {}
