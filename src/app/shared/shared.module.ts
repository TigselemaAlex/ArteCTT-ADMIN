import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [PrimengModule, ReactiveFormsModule],
  exports: [PrimengModule, ReactiveFormsModule],
})
export class SharedModule {}
