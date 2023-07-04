import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { delay, finalize, timeout } from 'rxjs';
import { Artwork } from 'src/app/shared/models/artwork.model';

import { ArtworkService } from 'src/app/shared/services/artwork.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  artworks: Artwork[] = [];
  targetArtworks: Artwork[] = [];
  loading: boolean = true;
  constructor(
    private artworkService: ArtworkService,
    private messageServices: MessageService
  ) {
    this.getAllArtworksService();
  }
  ngOnInit(): void {}

  private getAllArtworksService() {
    this.artworkService.getAllArtworks().subscribe({
      next: (artworks) => {
        this.artworks = artworks;
        this.getFeaturedArtworksService();
      },
    });
  }
  private getFeaturedArtworksService() {
    this.artworkService.getFeaturedArtworks().subscribe((resp) => {
      this.targetArtworks = resp;
      this.artworks = this.artworks.filter((art) => {
        return !this.targetArtworks.some((target) => target.code === art.code);
      });
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
  }

  saveFeatures() {
    this.artworkService.saveFeatures(this.targetArtworks).subscribe({
      next: (resp) => {
        console.log(resp);
        this.messageServices.add({
          severity: 'success',
          summary: 'Exitoso',
          detail:
            'Se han actualizado las obras destacadas en la aplicacion móvil',
        });
      },
    });
  }
}
