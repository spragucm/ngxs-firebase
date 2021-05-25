import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingsListComponent } from '../toppings-list/toppings-list.component';
import { SaladPageComponent } from './salad-page.component';
import { Routes, RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { SaladState } from './salad.state';

const routes: Routes = [
  { path: 'order', component: SaladPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState])
  ],
  declarations: [ToppingsListComponent, SaladPageComponent]
})
export class SaladModule { }
