import { ARTWORK_DATA, Artwork } from 'src/app/shared/models/artwork.model';
import { Component, OnInit } from '@angular/core';
import { FormService } from './services/form.service';


@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit {
  artwork: Artwork[] = [];
  selectedItems: Artwork[] = [];
  visible: boolean = false;

  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.artwork = ARTWORK_DATA;
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
      },
    });
  }

  onOpenForm(artworkItem?: Artwork): void {
    this.visible = true;
    if (artworkItem) {
      this.formService.onOpen({ open: this.visible, data: artworkItem });
    } else {
      this.formService.onOpen({ open: this.visible });
    }
  }
}