import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  constructor(
    private artworkService: ArtworkService,
    private messageServices: MessageService
  ) {}
  ngOnInit(): void {
    this.getAllArtworksService();
    this.getFeaturedArtworksService();
  }

  private getAllArtworksService() {
    this.artworkService.getAllArtworks().subscribe((resp) => {
      this.artworks = resp;
    });
  }
  private getFeaturedArtworksService() {
    this.artworkService.getFeaturedArtworks().subscribe((resp) => {
      this.targetArtworks = resp;
      this.artworks = this.artworks.filter((art) => {
        return !this.targetArtworks.some((target) => target.code === art.code);
      });
    });
  }

  saveFeatures() {
    this.artworkService.saveFeatures(this.targetArtworks).subscribe({
      next: (resp) => {
        this.messageServices.add({
          severity: 'success',
          summary: 'Exitoso',
          detail:
            'Se han actualizado las obras destacadas en la aplicacion móvil',
        });
        this.getAllArtworksService();
        this.getFeaturedArtworksService();
      },
    });
  }
}
