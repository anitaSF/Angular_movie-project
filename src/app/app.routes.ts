import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta para la página home (al ser la pagina principal no se pone nada entre las comillas porque estará en el dominio ppal), y se indica el componente que se abrirá en esa ruta (se debe importar arriba tambien)
    { path: 'movies', component: MovieListComponent },
    { path: 'create', component: MovieFormPageComponent },
];
// En html debemos llamar a este archivo router como un elemento html más 