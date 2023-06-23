import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit {
  artworks: Artwork[] = [];
  qrCode: string = '';
  imageTitle: string = '';

  constructor() {}
  ngOnInit(): void {
    this.artworks = ARTWORK_DATA;
  }

  generateQRCode(artwork: Artwork): void {
    this.qrCode = artwork.code;
    this.imageTitle = artwork.name!;
  }

  printFromQR(qr: any): void {
    let image = null;
    image = qr.qrcElement.nativeElement
      .querySelector('canvas')
      .toDataURL('image/png');

    printJS({
      printable: image,
      headerStyle: 'text-align: center;',
      type: 'image',
      header: this.imageTitle,
      showModal: true,
      modalMessage: 'Printing Qr Code...',
      style: 'img { width: 800px;height: 800px;}',
    });
  }
}
