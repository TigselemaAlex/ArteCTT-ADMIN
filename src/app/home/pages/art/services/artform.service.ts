import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormAction } from '../../agenda/services/form.service';

@Injectable({
  providedIn: 'root',
})
export class ArtformService {
  private _open = new BehaviorSubject<FormAction>({ open: false });
  constructor() {}
  public open$ = this._open.asObservable();

  public onOpen(formAction: FormAction): void {
    this._open.next(formAction);
  }
}
