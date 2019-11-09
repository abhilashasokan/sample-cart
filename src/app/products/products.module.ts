import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/listing/products.component';
import { ManageComponent } from './components/manage/manage.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule],
  declarations: [ProductsComponent, ManageComponent]
})
export class ProductsModule {}
