import { Component, Input, OnInit, Output } from '@angular/core';
import { Agenda } from 'src/app/shared/models/agenda.model';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  visible: boolean = false;
  agendaItem!: Agenda;
  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        console.log("no3");
      },
    });
  }

  onClose(): void {
    this.formService.onOpen({ open: false, data: this.agendaItem });
    console.log("no3");
  }
}
