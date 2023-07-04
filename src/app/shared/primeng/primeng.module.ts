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
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';

import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
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
    CascadeSelectModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    ToastModule,
    SkeletonModule,
    ConfirmDialogModule,
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
    CascadeSelectModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    ToastModule,
    SkeletonModule,
    ConfirmDialogModule,
  ],
})
export class PrimengModule {}
