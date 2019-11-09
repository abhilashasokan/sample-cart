import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
/* Firebase services + enviorment module */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { ShellComponent } from './layout/container/shell/shell.component';
import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [ShellComponent, HeaderComponent, FooterComponent],
  providers: [AuthenticationService],
  bootstrap: [ShellComponent]
})
export class AppModule {}
