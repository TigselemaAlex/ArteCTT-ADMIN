import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';

import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ArtCreateComponent } from '../../components/art/art-create/art-create.component';
import { Router } from '@angular/router';
import { ArtEditComponent } from '../../components/art/art-edit/art-edit.component';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
  providers:[DialogService,MessageService]
})
export class ArtComponent implements OnInit {
  artworks: Artwork[] = [];
  selectedItems:Artwork[]=[];

  ref!:DynamicDialogRef;

  constructor(private artService:ArtService,public dialogService:DialogService,
    public messageService:MessageService,private router:Router){

  }

  ngOnInit(): void {
    this.artworks=this.artService.getAllArtWorks();
  }

  deleteArt(id:number){
    this.artService.deleteArtWork(id);
    console.log('elemento eliminado')
    this.artService.getAllArtWorks();
  }

  navigateToAuthor(){
    this.router.navigate(['/home/author']);
  }

  showDialog(){
    this.ref=this.dialogService.open(ArtCreateComponent,{
      header:'Crear Registro de Pintura',
      width:'70%',
      height:'80%',
      maximizable:true
    }) 

    this.ref.onClose.subscribe((resul)=>{
      this.artService.getAllArtWorks();
    })

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
} 

  editDialog(art:Artwork){
    this.ref=this.dialogService.open(ArtEditComponent,{
      header:'Editar Registro de Pintura',
      width:'70%',
      height:'80%',
      data:art,
      maximizable:true
    })
    this.ref.onClose.subscribe((resul)=>{
      this.artService.getAllArtWorks();
    })

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
  
  }
}
