import { Component, OnInit } from '@angular/core';
import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  artworks: Artwork[] = [];
  targetArtworks: Artwork[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.artworks = ARTWORK_DATA;
  }
  getUrlFromWordpress(imageURL: string): string {
    // Reemplaza con la URL de la imagen que deseas cargar
    const imageUrl = imageURL; // Especifica la URL de la imagen que deseas cargar

    console.log(imageUrl);
    this.http.get(imageUrl, { responseType: 'blob' }).subscribe((response) => {
      /* const reader = new FileReader();
      reader.onloadend = () => {
        this.imageSrc = reader.result as string;
        console.log(reader.result);
      };
      reader.readAsDataURL(response); */
    });
    return 'asd';
  }
}
