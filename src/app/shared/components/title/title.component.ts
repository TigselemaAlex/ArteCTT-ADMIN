import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  title: string = 'Titulo';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getTitle();
  }
  getTitle(): void {
    const currentUrl = this.router.url;
    let urlName = currentUrl.split('/')[2];
    switch (urlName) {
      case 'featured':
        this.title = 'Destacados';
        break;
      case 'qr-code':
        this.title = 'Código QR';
        break;
      case 'art':
        this.title = 'Obras de Arte';
        break;
      case 'agenda':
        this.title = 'Agenda Semanal';
        break;
      case 'author':
        this.title = 'Autores';
        break;
    }
  }
}
