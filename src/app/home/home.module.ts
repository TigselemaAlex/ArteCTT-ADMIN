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
import { FormComponent } from './pages/agenda/form/form.component';
import { ArtworkFormComponent } from './pages/art/artwork-form/artwork-form.component';
import { ArtworkService } from '../shared/services/artwork.service';
import { MessageService } from 'primeng/api';
import { AuthorComponent } from './pages/author/author.component'; 
import { AuthorFormComponent } from './pages/author/author-form/author-form.component';

@NgModule({
  declarations: [
    MainComponent,
    SidenavComponent,
    FeaturedComponent,
    QrCodeComponent,
    ArtComponent,
    AgendaComponent,
    FormComponent,
    ArtworkFormComponent,
    AuthorComponent,
    AuthorFormComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [ArtworkService, MessageService],
})
export class HomeModule {}
