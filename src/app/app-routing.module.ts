import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {
      resetCache: true
    }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      resetCache: true
    }
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [SignInComponent, SignUpComponent],
  providers: []
})
export class AppRoutingModule {}
