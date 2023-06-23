import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PickListModule } from 'primeng/picklist';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    PickListModule,
    DataViewModule,
    TableModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
  ],
  exports: [
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    PickListModule,
    DataViewModule,
    TableModule,
    DialogModule,
    CalendarModule,
    InputTextareaModule,
  ],
})
export class PrimengModule {}
