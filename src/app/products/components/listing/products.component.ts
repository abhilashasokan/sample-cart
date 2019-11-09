import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'ssc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsRef: AngularFirestoreCollection;
  products$: Observable<any[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsRef = this.productsService.getProducts();
    this.products$ = this.productsRef.valueChanges();
  }
}
