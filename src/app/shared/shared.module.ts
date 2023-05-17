import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [PrimengModule, ReactiveFormsModule, QRCodeModule],
  exports: [PrimengModule, ReactiveFormsModule, TitleComponent, QRCodeModule],
})
export class SharedModule {}
