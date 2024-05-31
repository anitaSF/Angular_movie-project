import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import Movie from '../../models/movie';


@Component({
  selector: 'app-movie-datail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-datail.component.html',
  styleUrl: './movie-datail.component.css'
})

export class MovieDatailComponent {
  selectedMovie: Movie | undefined;
  // Para acceder a la ruta parametrizada de cada item película se debe importar el modulo "ActivateRoute" y definir una "private route"
  constructor(private route: ActivatedRoute, public movieService: MovieService) {
    const movieName = route.snapshot.params['movieName']; // Se crea una variable para alojar la ruta y definir el parámetro que vamos a pasar en el archivo .app-routes.ts. El valor definido entre corchetes [] debe ser el mismo que el parámetro.
    this.selectedMovie = movieService.getMovie(movieName);
  }

}
