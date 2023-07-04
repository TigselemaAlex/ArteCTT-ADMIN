import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  items!: MenuItem[];
  activeItem: any;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Destacados',
        icon: PrimeIcons.STAR_FILL,
        routerLink: './featured',
        command: (event) => this.setActiveItem(event.item),
      },
      {
        label: 'Codigo QR',
        icon: PrimeIcons.QRCODE,
        routerLink: './qr-code',
        command: (event) => this.setActiveItem(event.item),
      },

      {
        label: 'Autores',
        icon: PrimeIcons.USERS,
        routerLink: './author',
        command: (event) => this.setActiveItem(event.item),
      },
      {
        label: 'Obras',
        icon: PrimeIcons.PALETTE,
        routerLink: './art',
        command: (event) => this.setActiveItem(event.item),
      },

      {
        label: 'Agenda',
        icon: PrimeIcons.FILE_EDIT,
        routerLink: './agenda',
        command: (event) => this.setActiveItem(event.item),
      },
    ];
  }
  setActiveItem(item: MenuItem): void {
    if (this.activeItem) {
      this.activeItem.styleClass = '';
    }
    this.activeItem = item;
    item.styleClass = 'active';
  }
}
