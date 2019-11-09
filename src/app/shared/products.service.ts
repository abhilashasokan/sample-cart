import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}
  getCategories() {
    return this.firestore.collection('category');
  }

  createProduct(product: Product) {
    this.firestore.collection('products').add(product);
  }

  getProducts() {
    return this.firestore.collection('products');
  }
}
