import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Author } from 'src/app/shared/models/author.model';
import { AuthorFormService } from './services/author-form.service';
import { AuthorService } from 'src/app/shared/services/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit, OnDestroy {
  authors: Author[] = [];
  visible = false;

  formSuscription!: Subscription;
  constructor(
    private messageService: MessageService,
    private formService: AuthorFormService,
    private authorService: AuthorService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnDestroy(): void {
    this.formSuscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadAuthors();
    this.formSuscription = this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        if (resp.action) {
          console.log(resp.data);
          this.save(resp.data);
        }
      },
    });
  }

  onOpenForm(author?: Author): void {
    this.visible = true;
    if (author) {
      this.formService.onOpen({
        open: this.visible,
        data: author,
        action: undefined,
      });
    } else {
      this.formService.onOpen({ open: this.visible, action: undefined });
    }
  }

  private loadAuthors(): void {
    this.authorService.findAll().subscribe({
      next: (resp) => {
        this.authors = resp;
      },
    });
  }

  save(author: Author): void {
    let observable;
    if (author.id) {
      observable = this.authorService.update(author);
    } else {
      observable = this.authorService.save(author);
    }

    observable.subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Autor',
          detail: author.id
            ? 'Autor actualizado con éxito'
            : 'Autor creado con éxito',
        });
        this.loadAuthors();
        this.visible = false;
        this.formService.onOpen({
          open: this.visible,
          action: undefined,
          data: null,
        });
      },
    });
  }

  deleteSelected(id: number): void {
    this.confirmationService.confirm({
      message:
        '¿Está seguro que desea eliminar el autor? <strong class="text-red-500" >Tenga en cuenta que tambien serán eliminadas las pinturas de dicho pintor.</strong>',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.authorService.delete(id).subscribe({
          next: (resp) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Autor',
              detail: 'Autor eliminado con éxito',
            });
            this.loadAuthors();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Autor',
              detail: 'Ha ocurrido un error al intentar eliminar al autor.',
            });
            this.loadAuthors();
          },
        });
      },
    });
  }
}
