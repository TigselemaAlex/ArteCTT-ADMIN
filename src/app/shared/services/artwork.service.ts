import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public getArtwork(code: string): Observable<Artwork> {
    return this.http.get<Artwork>(`${this.ENDPOINT}/${code}`);
  }

  public createArtwork(artwork: Artwork, image: File): Observable<Artwork> {
    const formData = new FormData();
    const artworkBlob = new Blob([JSON.stringify(artwork)], {
      type: 'application/json',
    });
    formData.append('artwork', artworkBlob, 'artwork.json');
    formData.append('image', image);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Artwork>(`${this.ENDPOINT}`, formData, {
      headers: headers,
    });
  }

  public updateArtwork(artwork: Artwork, image: File): Observable<Artwork> {
    const formData = new FormData();
    const artworkBlob = new Blob([JSON.stringify(artwork)], {
      type: 'application/json',
    });
    formData.append('artwork', artworkBlob, 'artwork.json');
    formData.append('image', image);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.put<Artwork>(
      `${this.ENDPOINT}/${artwork.code}`,
      formData,
      { headers: headers }
    );
  }

  public deleteArtwork(code: string): Observable<Artwork> {
    return this.http.delete<Artwork>(`${this.ENDPOINT}/${code}`);
  }
}
