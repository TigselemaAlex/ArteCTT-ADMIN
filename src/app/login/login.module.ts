import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MainComponent } from './pages/main/main.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [MainComponent, LoginFormComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  providers: [MessageService],
})
export class LoginModule {}
