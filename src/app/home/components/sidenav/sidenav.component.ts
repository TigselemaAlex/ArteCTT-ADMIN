import { Component, OnInit } from '@angular/core';
import { PrimeIcons,MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  
})
export class SidenavComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Destacados',
        icon: PrimeIcons.STAR_FILL,
        routerLink:'./'
      },
      {
        label: 'Codigo QR',
        icon: PrimeIcons.QRCODE,
      },
      {
        label: 'Ver Obras',
        icon: PrimeIcons.IMAGE,
      },
      {
        label: 'Agenda',
        icon: PrimeIcons.FILE_EDIT,
      }
    ];
  }
}
