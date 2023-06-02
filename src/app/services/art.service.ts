import { Injectable } from '@angular/core';
import { ARTWORK_DATA, Artwork } from '../shared/models/artwork.model';
import { AUTHOR_DATA, Author } from '../shared/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private artworks: Artwork[] = ARTWORK_DATA;

  private authors:Author[]= AUTHOR_DATA;

  constructor() { }

  getAllArtWorks():Artwork[]{
    return this.artworks;
  }

  getAllAuthors():Author[]{
    return this.authors;
  }

  getArtWorkById(id:number):Artwork| undefined{
    return this.artworks.find(artwork => artwork.id === id);
  }

  addArtWorks(artWork:Artwork){
    this.artworks.push(artWork)
  }
  addAuthors(author:Author){
    this.authors.push(author)
  }

  updateArtWorks(artWork:Artwork){
    const index = this.artworks.findIndex(a => a.id === artWork.id);
    if (index !== -1) {
      this.artworks[index] = artWork;
    }
  }

  updateAuthor(author:Author){
    const index = this.authors.findIndex(a => a.id === author.id);
    if (index !== -1) {
      this.authors[index] = author;
    }
  }

  deleteArtWork(id:number){
    const index = this.artworks.findIndex(artwork => artwork.id === id);
    if (index !== -1) {
      this.artworks.splice(index, 1);
    }
  }

  deleteAuthor(id:number){
    const index = this.authors.findIndex(author => author.id === id);
    if (index !== -1) {
      this.authors.splice(index, 1);
    }
  }
  }


