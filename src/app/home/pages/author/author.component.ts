import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Artwork } from 'src/app/shared/models/artwork.model';
import { Author } from 'src/app/shared/models/author.model';

import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateAuthorComponent } from '../../components/author/create-author/create-author.component';
import { EditAuthorComponent } from '../../components/author/edit-author/edit-author.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  providers:[DialogService,MessageService]
})
export class AuthorComponent implements OnInit {

  authors: Author[] = [];
  selectedItems:Author[]=[];

  ref!:DynamicDialogRef;

  constructor(private authorsService:ArtService,public dialogService:DialogService,
    public messageService:MessageService,private location:Location){

  }

  ngOnInit(): void {
    this.authors=this.authorsService.getAllAuthors();
  }

  deleteAuthor(id:number){
    this.authorsService.deleteAuthor(id)
  }

  return(){
    this.location.back();
  }

  showDialog(){
    this.ref=this.dialogService.open(CreateAuthorComponent,{
      header:'Crear Autor',
      width:'40%',
      height:'80%',
      maximizable:true
    }) 

    this.ref.onClose.subscribe((resul)=>{
      this.authorsService.getAllAuthors();
    })

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
}

showDialogEdit(author:Author){
  this.ref=this.dialogService.open(EditAuthorComponent,{
    header:'Modificar Autor',
    width:'40%',
    height:'80%',
    data:author,
    maximizable:true
})
this.ref.onClose.subscribe((resul)=>{
  this.authorsService.getAllAuthors();
})
this.ref.onMaximize.subscribe((value) => {
  this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
});

}

}
