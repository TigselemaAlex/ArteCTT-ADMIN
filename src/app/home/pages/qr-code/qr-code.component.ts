import { Component, OnInit } from '@angular/core';
import * as printJS from 'print-js';
import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';
import { ArtworkService } from 'src/app/shared/services/artwork.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit {
  artworks: Artwork[] = [];
  qrCode: string = '';
  imageTitle: string = '';

  constructor(private artworkService: ArtworkService) {}
  ngOnInit(): void {
    this.getAllArtworksService();
  }

  private getAllArtworksService() {
    this.artworkService.getAllArtworks().subscribe((resp) => {
      this.artworks = resp;
    });
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
