import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Author } from '../models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private ENDPOINT = `${environment.API_URL}/author`;
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.ENDPOINT);
  }

  public findById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.ENDPOINT}/${id}`);
  }

  public save(author: Author): Observable<Author> {
    return this.http.post<Author>(this.ENDPOINT, author);
  }

  public update(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.ENDPOINT}/${author.id}`, author);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.ENDPOINT}/${id}`);
  }
}
