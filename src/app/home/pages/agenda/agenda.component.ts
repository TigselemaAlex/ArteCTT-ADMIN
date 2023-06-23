import { Component, OnInit } from '@angular/core';
import { AGENDA_DATA, Agenda } from 'src/app/shared/models/agenda.model';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agenda: Agenda[] = [];
  selectedItems: Agenda[] = [];
  visible: boolean = false;

  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.agenda = AGENDA_DATA;
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
      },
    });
  }

  onOpenForm(agendaItem?: Agenda): void {
    this.visible = true;
    if (agendaItem) {
      this.formService.onOpen({ open: this.visible, data: agendaItem });
    } else {
      this.formService.onOpen({ open: this.visible });
    }
  }
}
