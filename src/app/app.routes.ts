import { UserFormComponent } from './pages/user-form/user-form.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { MovieDatailComponent } from './pages/movie-datail/movie-datail.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta para la página entre comillas (en este caso, al ser la pagina principal (home) no se pone nada entre las comillas porque estará en el dominio ppal), y se indica el componente que se abrirá en esa ruta (se debe importar arriba tambien)

    { path: 'movies', component: MovieListComponent }, // Para las rutas a paginas interiores, entre comillas se indica la terminación que tendra en la url (dominio.com/pag_interior) 
    { path: 'movies/:movieName', component: MovieDatailComponent }, // Rutas parametrizadas: Para ir a una página interna que depende de un item de un listado o galeria. La ruta se compone por la página padre donde esta el item + el parámetro definido para cada item, que normalmente será el nombre de la página o id, precedido de dos puntos ('pag_padre/:parametro').
    // El componente, como en las rutas normales, es el nombre del componente creado para mostrar la información interior de cada elemento del listado. Se debe importar arriba también

    { path: 'create', component: MovieFormPageComponent },

    { path: 'users', component: UsersListComponent },
    { path: 'users/:id', component: UserDetailsComponent }, // Igual que para abrir la página detalle de una película, para mostrar el perfil de cada usuario, usamos rutas parametrizadas. Desde cada item "user" de la lista se accedera a sus datos gracias a esta ruta. El parámetro definido en este caso es el id

    { path: 'newuser', component: UserFormComponent },
];

// En html que vamos a utilizar estas rutas, debemos llamar a este archivo router como un elemento html más <router-outlet></router-outlet> al inicio