import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SignInComponent, SignUpComponent],
  exports: [SignInComponent, SignUpComponent]
})
export class CoreModule {}
