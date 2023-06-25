import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artwork } from '../models/artwork.model';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  private ENDPOINT = `${environment.API_URL}/artworks`;

  constructor(private http: HttpClient) {}

  public getFeaturedArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.ENDPOINT}/featured`).pipe(
      map((artworks) => {
        artworks.forEach((art) => {
          art.imageURL = environment.HOST_URL + art.imageURL;
        });
        return artworks;
      })
    );
  }

  public getAllArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.ENDPOINT}`).pipe(
      map((artworks) => {
        artworks.forEach((art) => {
          art.imageURL = environment.HOST_URL + art.imageURL;
        });
        return artworks;
      })
    );
  }

  public saveFeatures(artworks: Artwork[]): Observable<Artwork[]> {
    return this.http.post<Artwork[]>(`${this.ENDPOINT}/featured`, artworks);
  }
}
