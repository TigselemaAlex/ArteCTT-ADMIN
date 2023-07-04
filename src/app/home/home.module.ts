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
import { ConfirmationService, MessageService } from 'primeng/api';
import { AgendaService } from '../shared/services/agenda.service';
import { AuthorComponent } from './pages/author/author.component';
import { AuthorFormComponent } from './pages/author/form/form.component';
import { FormService } from './pages/agenda/services/form.service';
import { AuthorFormService } from './pages/author/services/author-form.service';
import { ArtformService } from './pages/art/services/artform.service';
import { AuthorService } from '../shared/services/author.service';

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
  providers: [
    ArtworkService,
    MessageService,
    AgendaService,
    FormService,
    AuthorFormService,
    ArtformService,
    AuthorService,
    ConfirmationService,
  ],
})
export class HomeModule {}
