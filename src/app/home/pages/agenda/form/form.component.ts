import { Component, Input, OnInit, Output } from '@angular/core';
import { Agenda } from 'src/app/shared/models/agenda.model';
import { FormService } from '../services/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  visible: boolean = false;
  agendaItem!: Agenda;
  form: FormGroup = this.fb.group({
    id: [null],
    title: ['', Validators.required],
    imageURL: ['', Validators.required],
  });

  constructor(
    private formService: FormService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        this.agendaItem = resp.data;
        this.form = this.fb.group({
          id: [this.agendaItem.id],
          title: [this.agendaItem.title, Validators.required],
          imageURL: [this.agendaItem.imageURL, Validators.required],
        });

      },
    });
  }

  onClose(): void {

    this.formService.onOpen({ open: false, data: null, action: undefined });
    this.visible = false;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Asegurese de llenar todos los campos',
      });
      return;
    }
    this.formService.onOpen({
      open: false,
      data: this.form.getRawValue(),
      action: 'save',
    });

  }
}
