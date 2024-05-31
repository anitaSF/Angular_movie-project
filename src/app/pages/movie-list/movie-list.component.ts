import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from './../../services/movie.service'; // Para utilizar las variables de un servicio se debe importar cmo un componente
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  // Para utilizar un servicio y sus variables se debe declarar dentro del paréntesis del constructor con el método "(public nombreServicie: NombreServicie) {}". Se debe importar arriba también
  constructor(public movieService: MovieService) {

  }
}
