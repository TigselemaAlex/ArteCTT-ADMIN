import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtformService {

  private _open = new BehaviorSubject<FormAction>({ open: false });
  constructor() {}
  public open$ = this._open.asObservable();

  public onOpen(formAction: FormAction): void {
    console.log("si2");
    this._open.next(formAction);
  }
}

export interface FormAction {
  open: boolean;
  data?: any;
}