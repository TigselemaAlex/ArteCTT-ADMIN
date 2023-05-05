import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
@NgModule({
  declarations: [],
  imports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
  ],
  exports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
  ],
})
export class PrimengModule {}
