import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit {
  imageSrc: string = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const imageUrl =
      'https://culturatungurahua.com/wp-content/uploads/2023/06/garlic.jpg'; // Especifica la URL de la imagen que deseas cargar
    /* const headers = new HttpHeaders()
      .set('Accept', '/*')
      .set('Accept-Encoding', 'gzip, deflate, br')
      .set('Connection', 'keep-alive')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET');

    this.http
      .get(imageUrl, { headers: headers, responseType: 'blob' })
      .subscribe((response) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageSrc = reader.result as string;
        };
        reader.readAsDataURL(response);
      }); */

    fetch(imageUrl, { mode: 'no-cors' })
      .then((response) => {
        // Lógica para manejar la respuesta
      })
      .catch((error) => {
        // Lógica para manejar el error
      });
  }
}
