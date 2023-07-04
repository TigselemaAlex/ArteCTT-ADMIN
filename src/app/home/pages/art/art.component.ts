import { Artwork } from 'src/app/shared/models/artwork.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArtformService } from './services/artform.service';
import { Subscription } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ArtworkService } from 'src/app/shared/services/artwork.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit, OnDestroy {
  artwork: Artwork[] = [];
  selectedItems: Artwork[] = [];
  visible: boolean = false;

  formSuscription!: Subscription;
  isEditing: boolean = false;

  constructor(
    private formService: ArtformService,
    private messageService: MessageService,
    private artworkService: ArtworkService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnDestroy(): void {
    this.formSuscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadArtwork();
    this.formSuscription = this.formService.open$.subscribe({
      next: (resp) => {
        this.visible = resp.open;
        if (resp.action) {
          const data = resp.data;
          this.save(data, data.image);
        }
      },
    });
  }

  loadArtwork(): void {
    this.artworkService.getAllArtworks().subscribe({
      next: (resp) => {
        this.artwork = resp;
      },
    });
  }

  onOpenArtForm(artworkItem?: Artwork): void {
    this.visible = true;
    if (artworkItem) {
      this.isEditing = true;
      this.formService.onOpen({ open: this.visible, data: artworkItem });
    } else {
      this.formService.onOpen({ open: this.visible });
    }
  }

  save(artworkItem: Artwork, image: File): void {
    if (this.isEditing) {
      this.artworkService.updateArtwork(artworkItem, image).subscribe({
        next: (resp) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Obra de arte',
            detail: 'Obra de arte actualizada correctamente',
          });
          this.loadArtwork();
        },
      });
    } else {
      this.artworkService.createArtwork(artworkItem, image).subscribe({
        next: (resp) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Obra de arte',
            detail: 'Obra de arte creada correctamente',
          });
          this.loadArtwork();
        },
      });
    }
  }

  onDelete(artwork: Artwork) {
    this.confirmationService.confirm({
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      message: `¿Está seguro de eliminar la obra de arte ${artwork.name}?`,
      accept: () => {
        this.artworkService.deleteArtwork(artwork.code).subscribe({
          next: (resp) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Obra de arte',
              detail: 'Obra de arte eliminada correctamente',
            });
            this.loadArtwork();
          },
        });
      },
    });
  }
}
