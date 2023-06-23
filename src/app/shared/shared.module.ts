import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TitleComponent],
  imports: [PrimengModule, ReactiveFormsModule, QRCodeModule],
  exports: [
    PrimengModule,
    ReactiveFormsModule,
    TitleComponent,
    QRCodeModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
