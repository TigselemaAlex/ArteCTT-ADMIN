import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ArtService } from 'src/app/services/art.service';
import { Author } from 'src/app/shared/models/author.model';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {
  author: Author = {
    id: this.config.data.id,
    nombre: this.config.data.nombre,
    apellido: this.config.data.apellido,
    pais: this.config.data.pais,
    provincia: this.config.data.provincia,
    ciudad: this.config.data.ciudad,
    biografia: this.config.data.biografia
  };
  constructor(public config:DynamicDialogConfig,private authorService:ArtService,
    private dialogRef: DynamicDialogRef){

  }

  ngOnInit(): void {
    console.log(this.config.data)
    
  }
  editAuthor(){
    this.authorService.updateAuthor(this.author)
    this.dialogRef.close();
  }
}
