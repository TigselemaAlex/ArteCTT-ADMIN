import { NgModule } from '@angular/core';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturedComponent } from './pages/featured/featured.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ArtComponent } from './pages/art/art.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
<<<<<<< HEAD
import { ArtCreateComponent } from './components/art/art-create/art-create.component';
import { AuthorComponent } from './pages/author/author.component';
import { CreateAuthorComponent } from './components/author/create-author/create-author.component';
import { FormsModule } from '@angular/forms';
import { EditAuthorComponent } from './components/author/edit-author/edit-author.component';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
=======
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6

@NgModule({
  declarations: [
    MainComponent,
    SidenavComponent,
    FeaturedComponent,
    QrCodeComponent,
    ArtComponent,
    AgendaComponent,
<<<<<<< HEAD
    ArtCreateComponent,
    AuthorComponent,
    CreateAuthorComponent,
    EditAuthorComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule,FormsModule,RadioButtonModule,
  DropdownModule],
=======
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
})
export class HomeModule {}
