import { Component, OnInit, ViewChild } from '@angular/core';
import { Artwork } from 'src/app/shared/models/artwork.model';
import { ArtworkService } from 'src/app/shared/services/artwork.service';
import * as htmlToImage from 'html-to-image';
import * as download from 'downloadjs';
import { IpcService } from 'src/app/shared/services/ipc.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit {
  artworks: Artwork[] = [];
  qrCode: string = '';
  qrCodeImage: any;
  imageTitle: string = '';
  selectedArtwork!: Artwork | undefined;
  @ViewChild('qrContent', { static: false }) qrContent!: any;

  constructor(private artworkService: ArtworkService, private ipc: IpcService) {
    this.getAllArtworksService();
  }
  ngOnInit(): void {}

  private getAllArtworksService() {
    this.artworkService.getAllArtworks().subscribe((resp) => {
      this.artworks = resp;
    });
  }

  generateQRCode(artwork: Artwork): void {
    this.selectedArtwork = artwork;
    this.qrCode = artwork.code;
    this.imageTitle = artwork.name!;
  }

  printFromQR(qr: any): void {
    let image = null;
    image = qr.qrcElement.nativeElement
      .querySelector('canvas')
      .toDataURL('image/png');
    this.qrCodeImage = image;
    this.onDonwload();
  }

  dowloadToImage(qr: any): void {
    let image = null;
    image = qr.qrcElement.nativeElement
      .querySelector('canvas')
      .toDataURL('image/png');
    this.qrCodeImage = image;

    this.onDonwload(true);
  }

  onDonwload(isToImage: boolean = false): void {
    const printContent = this.qrContent.nativeElement;
    printContent.style.display = 'flex';
    printContent.style.gap = '2rem';
    printContent.style.backgroundColor = '#fff';
    printContent.style.color = '#000';
    printContent.style.padding = '10px 10px 10px 10px';
    htmlToImage.toJpeg(printContent).then((data) => {
      if (isToImage) {
        download(data, this.selectedArtwork?.name + '.jpeg');
      } else {
        this.ipc.send('print', data);
      }
      printContent.style.display = '';
      printContent.style.gap = '';
      printContent.style.backgroundColor = '';
      printContent.style.color = '';
      printContent.style.padding = '';
    });
  }
}
