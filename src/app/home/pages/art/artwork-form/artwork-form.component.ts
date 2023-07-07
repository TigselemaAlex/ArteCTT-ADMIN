import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Artwork,
  deliveryTypeOptions,
  conservationStateOptions,
  integrityStateOptions,
} from 'src/app/shared/models/artwork.model';
import { ArtformService } from '../services/artform.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AUTHOR_DATA } from 'src/app/shared/models/author.model';
import { AuthorService } from 'src/app/shared/services/author.service';
import { Subscriber, Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.scss'],
})
export class ArtworkFormComponent implements OnInit {
  visible: boolean = false;
  artworkItem!: Artwork;
  date!: Date[];

  formGroup: FormGroup = this.formBuilder.group({
    code: ['', Validators.required],
    other_code: [''],
    name: ['', Validators.required],
    centuryYear: [''],
    deliveryType: [''],
    signatureLocation: [''],
    country: [''],
    technique: [''],
    support: [''],
    conservationState: [''],
    integrityState: [''],
    incomeForm: [''],
    incomePrice: [''],
    incomeYear: [''],
    value: [''],
    pieceHeight: [''],
    pieceWidth: [''],
    pieceDeep: [''],
    gravingHeight: [''],
    gravingWidth: [''],
    frameElementHeight: [''],
    frameElementWidth: [''],
    image: [''],
    imageWordpressURL: [''],
    observation: [''],
    description: [''],
    location: [''],
    recordedBy: [''],
    reviewedBy: [''],
    registeredDate: [''],
    author: ['', Validators.required],
  });
  deliveryTypeOptions = deliveryTypeOptions;
  conservationStateOptions = conservationStateOptions;
  integrityStateOptions = integrityStateOptions;
  authorOptions!: any[];

  constructor(
    private formService: ArtformService,
    private formBuilder: FormBuilder,
    private autorService: AuthorService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.loadAutorOptions();

    this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        this.artworkItem = resp.data;
        if (this.artworkItem) {
          let incomeYear = null;
          if (this.artworkItem.incomeYear) {
            incomeYear = new Date(this.artworkItem.incomeYear, 0, 1);
          }
          let registeredDate = null;
          if (this.artworkItem.registeredDate) {
            registeredDate = new Date(this.artworkItem.registeredDate);
            registeredDate.setDate(registeredDate.getDate() + 1);
          }
          this.formGroup.patchValue({
            code: this.artworkItem.code,
            other_code: this.artworkItem.other_code,
            name: this.artworkItem.name,
            centuryYear: this.artworkItem.centuryYear,
            deliveryType: this.artworkItem.deliveryType,
            signatureLocation: this.artworkItem.signatureLocation,
            country: this.artworkItem.country,
            technique: this.artworkItem.technique,
            support: this.artworkItem.support,
            conservationState: this.artworkItem.conservationState,
            integrityState: this.artworkItem.integrityState,
            incomeForm: this.artworkItem.incomeForm,
            incomePrice: this.artworkItem.incomePrice,
            incomeYear: incomeYear,
            value: this.artworkItem.value,
            pieceHeight: this.artworkItem.pieceHeight,
            pieceWidth: this.artworkItem.pieceWidth,
            pieceDeep: this.artworkItem.pieceDeep,
            gravingHeight: this.artworkItem.gravingHeight,
            gravingWidth: this.artworkItem.gravingWidth,
            frameElementHeight: this.artworkItem.frameElementHeight,
            frameElementWidth: this.artworkItem.frameElementWidth,
            imageWordpressURL: this.artworkItem.imageWordpressURL,
            observation: this.artworkItem.observation,
            description: this.artworkItem.description,
            location: this.artworkItem.location,
            recordedBy: this.artworkItem.recordedBy,
            reviewedBy: this.artworkItem.reviewedBy,
            registeredDate: registeredDate,
            author: this.artworkItem.author,
          });
        }
      },
    });
  }

  loadAutorOptions() {
    this.autorService.findAll().subscribe({
      next: (resp) => {
        this.authorOptions = resp.map((author) => ({
          label: author.fullName,
          value: author,
        }));
      },
    });
  }

  onClose(): void {
    this.visible = false;
    this.formService.onOpen({ open: false, data: null, action: undefined });
  }

  onSubmit(image: File): void {
    let incomeYear = null;
    if (this.formGroup.get('incomeYear')?.value) {
      incomeYear = this.formGroup.get('incomeYear')?.value.getFullYear();
    }

    this.formGroup.patchValue({
      image: image,
      incomeYear: incomeYear,
    });
    if (this.formGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail:
          'Formulario invalido, asegurese de llenar todos los campos con el *',
      });
      return;
    }
    this.visible = false;
    this.formService.onOpen({
      open: false,
      data: this.formGroup.getRawValue(),
      action: 'save',
    });
  }
}
