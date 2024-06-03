// Un servicio es un recurso que se puede utilizar desde cualquier componente de la página web

import { Injectable } from '@angular/core';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  heading: string; // Se crea la variable "heading" para definir el titulo de la página. Como va a ser cadena de texto, tiene tipo string
  movies: Movie[]; // Se crea la variable "movie", un array de tipo "Movie[]" que se corresponde con el modelo Movie.ts creado

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
        duration: 120,
        director: 'Stanley'
      }
    ];
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  } // Se crea el método .push sobre el array "movies" (tipado con el modelo "Movie") para añadir nuevo item (movie: Movie) cuando se rellene el formulario "movie-form". Para ello se debe acceder a esta función desde el .ts del componente movie-form 
  // El método addMovie seria: Para el array "movies", crear ".push" un nuevo item "(movie)". En el argumento de la función se debe indicar también el nuevo item y su tipo "addMovie(movie: Movie"

  getMovie(name: string): Movie | undefined {
    return this.movies.find((movie) => movie.name === name)
  } // Para mostrar la informacion y contenido de cada item linkado con ruta parametrizada, se crea el método .find sobre el array "movies" (tipado con el modelo "Movie") para buscar un item (movie) que tenga la propiedad movie.name === name, que es el argumento que recibe la funcion getMovie. 
  // Utilizamos el método "return" para que se devuelva la información obtenida (propiedades de objeto definido con el modelo Movie). Si no se encuentra película (movie.name) asociada con ningun parámetro de ruta, devuelve "undefine"
}
// todas las variables y métodos creadas dentro de la clase de un servicio se van a poder utilizar desde cualquier componente del proyecto
// Desde el .ts del componente donde se quiera utilizar, se debe importar en el argumento del constructor (public nombreServicie: NombreServicie) {}
