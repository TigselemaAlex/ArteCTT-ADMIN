import { Component, OnInit } from '@angular/core';
import { AUTHOR_DATA, Author } from 'src/app/shared/models/author.model';

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

  constructor() {}
  ngOnInit(): void {
    this.author = AUTHOR_DATA;

  }

  showBibliography(item: any) {
    this.selectedAuthor = item;
    this.displayBibliography = true;
  }


}
