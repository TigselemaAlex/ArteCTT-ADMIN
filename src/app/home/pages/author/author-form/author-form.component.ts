import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Author } from 'src/app/shared/models/author.model';
import { AuthorformService } from '../services/authorform.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {
  visible: boolean = false;
  authorItem!: Author;

  formGroup!: FormGroup;


  constructor(private formService: AuthorformService) {}
  ngOnInit(): void {
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
      },
    });
  }

  onClose(): void {
    this.formService.onOpen({ open: false, data: this.authorItem });
  }
}




