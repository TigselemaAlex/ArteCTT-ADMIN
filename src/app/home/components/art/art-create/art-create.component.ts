import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';
import { Author } from 'src/app/shared/models/author.model';

@Component({
  selector: 'app-art-create',
  templateUrl: './art-create.component.html',
  styleUrls: ['./art-create.component.scss']
})
export class ArtCreateComponent implements OnInit {
  forma: string = '';
  authors:Author[]=[];

  
  selectedAutor!: Author;
    

constructor(private authorsService:ArtService){

}

ngOnInit(): void {
  this.authors=this.authorsService.getAllAuthors();
  console.log(this.authors);
}
}
