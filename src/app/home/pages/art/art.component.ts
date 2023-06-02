<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';

import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ArtCreateComponent } from '../../components/art/art-create/art-create.component';
import { Router } from '@angular/router';
=======
import { Component } from '@angular/core';
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
<<<<<<< HEAD
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
  }

=======
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {

}
>>>>>>> 37d22e1487fa0b28a989708add4d51fcdc2ad4a6
