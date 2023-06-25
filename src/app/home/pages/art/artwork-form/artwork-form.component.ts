import { Component, OnInit } from '@angular/core';
import { Artwork, deliveryTypeOptions,conservationStateOptions,integrityStateOptions } from 'src/app/shared/models/artwork.model';
import { ArtformService } from '../services/artform.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AUTHOR_DATA } from 'src/app/shared/models/author.model';


@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.scss']
})

export class ArtworkFormComponent implements OnInit {
  visible: boolean = false;
  artworkItem!: Artwork;
  date!: Date[];

  formGroup!: FormGroup;
  deliveryTypeOptions = deliveryTypeOptions;
  conservationStateOptions = conservationStateOptions;
  integrityStateOptions = integrityStateOptions;
  authorOptions!: any[];

  constructor(private formService: ArtformService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      deliveryType: [''],
      conservationState: [''],
      integrityState: [''],
      author: new FormControl(),
    });

    this.authorOptions = AUTHOR_DATA.map((author) => ({
      label: author.fullName,
      value: author,
    }));

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



