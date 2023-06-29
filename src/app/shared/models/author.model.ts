import { ARTWORK_DATA, Artwork } from './artwork.model';

export interface Author {
  id?: number;
  fullName: string;
  address: string;
  bibliography: string;
  artworks?: Artwork[];
}

export const AUTHOR_DATA: Author[] = [
  {
    id: 1,
    fullName: 'Fausto Holguín Vásconez',
    address: 'Ambato',
    bibliography:
      'Nacio en 1920 en Ambato Tungurahua',
  },

  {
    id: 1,
    fullName: 'Alex Tigselema',
    address: '',
    bibliography:
      'Habiendo perdido a su padre cuando apenas contaba con seis años de edad, su madre trabajó como enfermera para mantenerlo. Julio fue muy enfermizo durante su infancia: padeció bronconeumonía, difteria, disentería, y hasta tuvo un principio de parálisis infantil. Creció escuchando al dúo Guayaquil, a Olimpo Cárdenas, a Carlos Rubira Infante y al dúo Villafuerte, artistas que marcaron una época en la música nacional y que influyeron en su vocación por el canto.Junto con Pepe, su hermano mayor, y contra la voluntad de su madre, comenzó a cantar en casa del músico Toapanta. Realizó sus estudios en la Filantrópica y en una escuela fiscal, bajo la dirección del maestro Lauro Dávila, precisamente autor del pasillo Guayaquil de mis amores. Terminada la primaria, se empleó en una zapatería de calzado para mujer, y luego como barnizador de muebles.A los diecisiete años ya era conocido por su hermosa y cálida voz, y participaba en programas de Radio Cóndor. En 1950 se unió con dos amigos y se dieron a recorrer los pueblos de Esmeraldas y Manabí cantando en trío. En alguna oportunidad se vio obligado a volver a su oficio de zapatero para sobrevivir. A pesar de los reproches, castigos, lágrimas y ruegos de su madre, no fue capaz de dejar su vida bohemia y parrandera.Con la grabación de su primer disco, Pobre mi madre querida (1954), en dúo con doña Fresia Saavedra, su nombre comenzó a ser conocido. A éste le siguieron el pasillo Esposa (1955), en dúo con Carlos Rubira Infante. El salto a la fama se dio en 1955 con su vals Fatalidad, que fue difundido por todas las radios del Ecuador y por las principales emisoras de otros países. La grabación de esta canción marcó el inicio de su carrera formal y de su reconocimiento. Su consagración internacional llegó con el bolero Nuestro juramento (1957), momento en que realizó varias giras por América Latina: comenzó un peregrinaje por Ecuador, Colombia, Perú, Argentina, Uruguay y Chile. Al regresar a su país, fue detenido y llevado a cumplir el servicio militar.Vuelto a la vida civil en 1960, siguió con su carrera, alcanzando actuaciones de hasta cuatro meses consecutivos en el cine Guayas de Guayaquil, con lleno completo. Participó en la película Romance en Ecuador y en otra rodada en Argentina. En 1965 se radicó en Venezuela, desde donde realizó giras triunfales por México, Puerto Rico y toda América Central. Grabó en dúo con Daniel Santos, Alci Acosta y Olimpo Cárdenas. Su última gira internacional tuvo lugar por Estados Unidos y Canadá. Los escándalos de su turbulenta vida también eran con frecuencia noticia. Varias veces fue apresado y casi siempre por problemas de mujeres o por incumplimiento con el Tribunal de Menores. Además de haberse casado cinco veces, tuvo hijos con otras mujeres, que llegaron a sumar un total de veintiocho. Nunca negó sus orígenes humildes, se mostraba generoso, despilfarrador del dinero con sus amigos, y prototipo del machismo porteño.A su regreso al Ecuador en 1975, cansado, envejecido prematuramente y carcomido por la cirrosis, fue abucheado en una actuación en su ciudad natal porque su voz ya no era la de antes. En los últimos años tenía un programa en Radio Cristal titulado "La hora de J. J.", de cuya propaganda a duras penas sacaba para vivir.',
  },

];
