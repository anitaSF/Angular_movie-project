import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Para acceder a la ruta parametrizada de cada item de un listado con links se debe importar el modulo "ActivateRoute"
import { MovieService } from './../../services/movie.service';
import Movie from '../../models/movie';


@Component({
  selector: 'app-movie-datail',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './movie-datail.component.html',
  styleUrl: './movie-datail.component.css'
})

export class MovieDatailComponent {
  selectedMovie: Movie | undefined; // Se crea la variable para alojar el contenido de la película seleccionada al hacer click en el listado, el item del array "movies" con tipo "Movie"

  constructor(
    private route: ActivatedRoute, // Para usar una ruta parametrizada definida en el archivo routes.ts se debe declarar en el argumento del constructor y definirla como una "private route" (private route: ActivatedRoute)
    public movieService: MovieService) // Se importa el servicio "MovieService", para utilizar la función getMovie y que nos devuelva el contenido de la película seleccionada. 
  {
    const movieName = this.route.snapshot.params['movieName']; // Se crea una variable para alojar la ruta. En el valor dado a la variable dado entre corchetes [] "route.snapshot.params['parametro']" debe definir el parámetro que vamos a pasar en el archivo app.routes.ts (path: 'pagRaiz/:parametro'). 
    // En este caso, el valor definido entre corchetes ['movieName'] debe ser el mismo que el parámetro de la ruta en app.routes.ts (path: 'movies/:movieName').

    // Ir al servicio "movieService" para ejecutar la función con el método de buscar y devolver el contenido de la película correspondiente a la ruta parametrizada seleccionada

    this.selectedMovie = movieService.getMovie(movieName); // Se debe declarar la variable "selectedMovie" con el contenido del "movie" devuelto por la funcion "getMovie(movieName)" incluida en el servicio "movieService": movieService.getMovie(movieName). 
    // El argumento de la función viene dado por el parámetro de la ruta paramentrizada del item del listado clicado.
  }

}
