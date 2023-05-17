import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AGENDA_DATA, Agenda } from 'src/app/shared/models/agenda.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agenda: Agenda[] = [];
  selectedItems: Agenda[] = [];
  constructor() {}
  ngOnInit(): void {
    this.agenda = AGENDA_DATA;
  }
}
