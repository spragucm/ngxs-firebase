import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladModule } from './salad-page/salad.module';

const routes: Routes = [
  { path: 'salad', loadChildren: () => SaladModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
