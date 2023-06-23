import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/shared/models/artwork.model';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.scss']
})
export class ArtworkFormComponent implements OnInit {
  visible: boolean = false;
  artworkItem!: Artwork;
  constructor(private formService: FormService) {}
  ngOnInit(): void {
    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
      },
    });
  }

  onClose(): void {
    this.formService.onOpen({ open: false, data: this.artworkItem });
  }
}



