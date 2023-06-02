import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Author } from 'src/app/shared/models/author.model';

import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {

  author: Author = {
    id: 0,
    nombre: '',
    apellido: '',
    pais: '',
    provincia: '',
    ciudad: '',
    biografia: ''
  };
  constructor(private authorService:ArtService,private dialogRef: DynamicDialogRef){

  }

  ngOnInit(): void {
    
  }

  createAuthor(){
    this.authorService.addAuthors(this.author);
    console.log(this.author);
    this.dialogRef.close();
  }
}
