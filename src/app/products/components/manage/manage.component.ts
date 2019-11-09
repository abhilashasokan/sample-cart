import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'ssc-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  createProduct: FormGroup;

  categoryRef: AngularFirestoreCollection;
  category$: Observable<any[]>;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
    this.categoryRef = this.productsService.getCategories();
    this.category$ = this.categoryRef.valueChanges();
  }
  buildForm() {
    this.createProduct = this.fb.group({
      productName: ['', Validators.required],
      imageUrl: ['', Validators.required],
      productCategory: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
      productInfo: ['', [Validators.required, Validators.minLength(15)]]
    });
  }
  onSave(product: FormGroup) {
    if (product.valid) {
      this.productsService.createProduct({
        name: product.value.productName,
        productCategory: product.value.productCategory,
        price: product.value.price,
        productInfo: product.value.productInfo,
        imageUrl: product.value.imageUrl
      });
      this.router.navigate(['/products']);
    }
  }

  get formStatus() {
    return this.createProduct.controls;
  }
}
