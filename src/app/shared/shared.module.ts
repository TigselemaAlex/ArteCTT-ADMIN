import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [PrimengModule, ReactiveFormsModule],
  exports: [PrimengModule, ReactiveFormsModule, TitleComponent],
})
export class SharedModule {}
