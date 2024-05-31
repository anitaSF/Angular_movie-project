import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})

export class MovieFormComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(public MovieService: MovieService) {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(300),
    ]); // cuando hay más de un validator, se deben definir como un array.
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    });
  }

  handleSubmit(): void {
    console.log('Movie Created:', this.movieForm.value);
    this.MovieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }
  // Se crea el metodo handleSubmit para que cuando se envíe el formulario, se ejecuten varios submétodos: 
  // 1. mostrar en consola el array de la nueva película creada.
  // 2. añadir una nueva película en el servicio MovieService (método .addMovie creado en el servicio con el método .push sobre el array "movie")
  // 3. limpiar el formulario (metodo .reset). Este método debe colocarse abajo del todo de la función para que se ejecuten los métodos anteriores sin problema

}
