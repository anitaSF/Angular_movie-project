import { Injectable } from '@angular/core';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[]; // Se crea la variable "movie", un array de tipo "Movie[]" que se corresponde con el modelo Movie.ts creado
  heading: string;

  constructor() {

    this.heading = 'Movie List';
    this.movies = [
      {
        name: 'El Señor de los Anillos',
        duration: 200,
        director: 'Peter Jackson',
      },
      {
        name: 'La Naranja Mecánica',
        duration: 280,
        director: 'Stanley'
      }
    ];
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  } // Se crea el método .push sobre el array "movies" (tipado con el modelo "Movie") para añadir nuevo item cuando se rellene el formulario "movie-form". Para ello se debe acceder a esta función desde el .ts del componente movie-form 
}
// todas las variables y métodos creadas dentro de la clase de un servicio se van a poder utilizar desde cualquier componente del proyecto
