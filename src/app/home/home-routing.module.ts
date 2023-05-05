import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ArtComponent } from './pages/art/art.component';
import { AgendaComponent } from './pages/agenda/agenda.component';

// /home/asdasdad
const routes: Routes = [
  {
    path: '',
    redirectTo: 'featured',
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'featured', component: FeaturedComponent },
      {
        path: 'qr-code',
        component: QrCodeComponent,
      },
      {
        path: 'art',
        component: ArtComponent,
      },
      {
        path: 'agenda',
        component: AgendaComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'featured',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
