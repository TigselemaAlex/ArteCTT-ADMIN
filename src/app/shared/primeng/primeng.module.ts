import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [],
  imports: [CardModule, InputTextModule, PasswordModule, ButtonModule],
  exports: [CardModule, InputTextModule, PasswordModule, ButtonModule],
})
export class PrimengModule {}
