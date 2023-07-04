import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/shared/models/author.model';
import { AuthorFormService } from '../services/author-form.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-author-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AuthorFormComponent implements OnInit {
  visible: boolean = false;
  author!: Author;
  form: FormGroup = this.fb.group({
    id: [null],
    fullName: ['', Validators.required],
    address: [''],
    bibliography: [''],
  });

  constructor(
    private fb: FormBuilder,
    private formService: AuthorFormService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        this.author = resp.data;
        if (resp.data == null) return;
        this.form = this.fb.group({
          id: [this.author.id],
          fullName: [this.author.fullName, Validators.required],
          address: [this.author.address],
          bibliography: [this.author.bibliography],
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
