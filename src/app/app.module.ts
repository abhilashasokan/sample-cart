import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
/* Firebase services + enviorment module */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { ShellComponent } from './layout/container/shell/shell.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    ProductsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  providers: [AngularFirestore],
  bootstrap: [ShellComponent]
})
export class AppModule {}
