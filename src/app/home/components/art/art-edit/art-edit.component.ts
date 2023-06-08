import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ArtService } from 'src/app/services/art.service';
import { Artwork } from 'src/app/shared/models/artwork.model';
import { Author } from 'src/app/shared/models/author.model';

@Component({
  selector: 'app-art-edit',
  templateUrl: './art-edit.component.html',
  styleUrls: ['./art-edit.component.scss']
})
export class ArtEditComponent implements OnInit {
  art:Artwork={
    id: this.config.data.id,
    otherid:this.config.data.otherid,
    author: this.config.data.author,
    name:this.config.data.name,
    picture: this.config.data.picture,
    date: this.config.data.date, //silgo/anio
    signature:this.config.data.signature,
    ubication:this.config.data.ubication,
    technique:this.config.data.technique,
    support:this.config.data.support,
    stateC:this.config.data.stateC,
    stateI:this.config.data.stateI,
    country:this.config.data.country,
    observation: this.config.data.observation,
    dimensions: {
      width:this.config.data.dimensions.width,
      height: this.config.data.dimensions.height,
      prof:this.config.data.dimensions.prof,
      dm:this.config.data.dimensions.dm,
      dme:this.config.data.dimensions.dme,
      pa:this.config.data.dimensions.pa,
      pan:this.config.data.dimensions.pan,
      pnum:this.config.data.dimensions.pnum,
      ma:this.config.data.dimensions.ma,
      man:this.config.data.dimensions.man,
      mprof:this.config.data.dimensions.mprof,
    },
    formaIngreso:this.config.data.formaIngreso,
    ValorUSD:this.config.data.ValorUSD,
    avaluo:this.config.data.avaluo,
    fechaIngreso:this.config.data.fechaIngreso,
    fechaRegistro:this.config.data.fechaRegistro
    }

    authors:Author[]=[];
    selectedAutor!: Author;
  constructor(public config:DynamicDialogConfig,private artService:ArtService,
    private dialogRef: DynamicDialogRef){

  }
  ngOnInit(): void {
    this.authors=this.artService.getAllAuthors();
    this.selectedAutor=this.config.data.author;
    
  }
  editArt(){
    this.art.author=this.selectedAutor;
    this.artService.updateArtWorks(this.art);
    this.dialogRef.close();
  }

}
