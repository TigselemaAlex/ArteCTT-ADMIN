import { Component, OnInit } from '@angular/core';
import { AUTHOR_DATA, Author } from 'src/app/shared/models/author.model';
import { AuthorformService } from './services/authorform.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  author: Author[] = [];
  selectedItems: Author[] = [];
  visible: boolean = false;
  displayBibliography = false;
  selectedAuthor: any;

  constructor( private formService: AuthorformService) {}
  ngOnInit(): void {
    this.author = AUTHOR_DATA;
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
      },
    });
  }

  onOpenAuthorForm(authorItem?: Author): void {
    this.visible = true;
    if (authorItem) {
      this.formService.onOpen({ open: this.visible, data: authorItem });
    } else {
      this.formService.onOpen({ open: this.visible });
    }
  }

  showBibliography(item: any) {
    this.selectedAuthor = item;
    this.displayBibliography = true;
  }
}
