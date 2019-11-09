import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
