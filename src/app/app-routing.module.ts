import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'demo',
      loadChildren: () => import('./shared-components/dynamic-form-container/dynamic-form-container.module').then(m => m.DynamicFormContainerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }