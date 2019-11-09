import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/listing/products.component';
import { ManageComponent } from './components/manage/manage.component';

const routesContact: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: []
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesContact)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
