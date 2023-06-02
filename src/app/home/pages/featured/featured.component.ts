import { Component, OnInit } from '@angular/core';
import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  artworks: Artwork[] = [];
  targetArtworks: Artwork[] = [];
  constructor() {}
  ngOnInit(): void {
    this.artworks = ARTWORK_DATA;
  }
}
