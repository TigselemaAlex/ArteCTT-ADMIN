import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Artwork } from 'src/app/shared/models/artwork.model';
import { Author } from 'src/app/shared/models/author.model';

import { SelectItem } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.scss']
})
export class ArtCreateComponent implements OnInit {

  art:Artwork={
  id: 0,
  otherid:0,
  author: {} as Author,
  name: '',
  picture: '',
  date: '', //silgo/anio
  signature:'',
  ubication:'',
  technique:'',
  support:'',
  stateC:'',
  stateI:'',
  country: '',
  observation: '',
  dimensions: {
    width:0,
    height: 0,
    prof:0,
    dm:0,
    dme:0,
    pa:0,
    pan:0,
    pnum:0,
    ma:0,
    man:0,
    mprof:0,
  },
  formaIngreso:'',
  ValorUSD:0,
  avaluo:0,
  fechaIngreso:new Date(),
  fechaRegistro:new Date()
  }
  forma: string = '';
  authors:Author[]=[];
  imagen:string='https://blogdeartecontemporaneo.files.wordpress.com/2013/12/3-dsc07279.jpg';

  
  selectedAutor!: Author;
    

constructor(private authorsService:ArtService,private dialogRef: DynamicDialogRef){

}

ngOnInit(): void {
  this.authors=this.authorsService.getAllAuthors();
  console.log(this.authors);

  
}

createArt(){
  //console.log(this.art);
  this.art.author=this.selectedAutor;
 //console.log(this.art.author);
 console.log(this.art);
 this.authorsService.addArtWorks(this.art);
 this.dialogRef.close();
}


}




