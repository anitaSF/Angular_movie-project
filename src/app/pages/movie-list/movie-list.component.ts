import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from './../../services/movie.service'; // Para utilizar las variables de un servicio se debe importar cmo un componente
import { RouterLink } from '@angular/router'; // Para utilizar las rutas parametrizadas de cada uno de los items del listado de películas que vienen del archivo app.routes.ts

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  // Para utilizar un servicio y sus variables se debe declarar dentro del paréntesis del constructor con el método "(public nuevaVariableServicie: NombreServicie) {}". Se debe crear una variable para alojar el servicio, en este caso "movieService"
  // Se debe importar arriba también.
  constructor(public movieService: MovieService) {

  }
}
