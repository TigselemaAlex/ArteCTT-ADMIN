import { Component, OnInit } from '@angular/core';
import { FormService } from './services/form.service';
import { Agenda } from 'src/app/shared/models/agenda.model';
import { AgendaService } from 'src/app/shared/services/agenda.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agenda: Agenda[] = [];
  selectedItems: Agenda[] = [];
  visible: boolean = false;

  constructor(
    private formService: FormService,
    private agendaService: AgendaService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.loadAgenda();
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        if (resp.action) {
          console.log(resp.data);
          this.save(resp.data);
        }
      },
    });
  }

  onOpenForm(agendaItem?: Agenda): void {
    this.visible = true;

    if (agendaItem) {
      this.formService.onOpen({
        open: this.visible,
        data: agendaItem,
        action: undefined,
      });
    } else {
      this.formService.onOpen({ open: this.visible, action: undefined });
    }
  }

  private loadAgenda(): void {
    this.agendaService.findAll().subscribe({
      next: (resp) => {
        this.agenda = resp;
      },
    });
  }

  save(agendaItem: Agenda): void {
    let observable;
    if (agendaItem.id) {
      observable = this.agendaService.update(agendaItem).subscribe();
    } else {
      observable = this.agendaService.save(agendaItem).subscribe();
    }
    observable.add(() => {
      this.loadAgenda();
      this.messageService.add({
        severity: 'success',
        summary: 'Agenda',
        detail: agendaItem.id
          ? 'Agenda actualizada con éxito!'
          : 'Agenda creada con éxito!',
      });
    });
  }

  deleteSelected(): void {
    if (this.selectedItems.length === 0) return;
    this.agendaService.delete(this.selectedItems).subscribe({
      next: (resp) => {
        console.log(resp);
        this.loadAgenda();
        this.messageService.add({
          severity: 'success',
          summary: 'Agenda',
          detail: 'Actividades eliminadas con éxito!',
        });
      },
      error: (err) => {
        console.log(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Agenda',
          detail: 'Error al eliminar las actividades!',
        });
      },
      complete: () => {
        this.selectedItems = [];
      },
    });
  }
}
