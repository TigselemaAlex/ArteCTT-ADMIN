import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Agenda } from '../models/agenda.model';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private ENDPOINT = `${environment.API_URL}/agenda`;
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.ENDPOINT);
  }

  public findById(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.ENDPOINT}/${id}`);
  }

  public save(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.ENDPOINT, agenda);
  }

  public update(agenda: Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(`${this.ENDPOINT}/${agenda.id}`, agenda);
  }

  public delete(agenda: Agenda[]): Observable<any> {
    return this.http.delete<any>(this.ENDPOINT, { body: agenda });
  }
}
