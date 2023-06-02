import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { QrCodeComponent } from './pages/qr-code/qr-code.component';
import { ArtComponent } from './pages/art/art.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
<<<<<<< HEAD
import { ArtCreateComponent } from './components/art/art-create/art-create.component';
import { AuthorComponent } from './pages/author/author.component';
=======
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6

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
<<<<<<< HEAD
      {
        path:'author',
        component:AuthorComponent
      }
=======
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
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
