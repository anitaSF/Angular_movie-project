import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  constructor(public userService: UserService) {
    // Importar el servicio donde se define la función de petición a la API (en este caso UserService)
  }

  ngOnInit(): void {
    this.getUsersComp();
  } // Función por defecto de ángular para incluir la declaración de funciones que tengan lógica, sobretodo en las peticiones a API. Dejamos el constructor para declara las variables a las que se le asigna el valor directamente

  getUsersComp() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.userService.users = data; // Se iguala el valor del array (users) creado en el servicio (userService) al contenido del objeto importado de la API (data). Ahora el array users tendrá los objetos y propiedades de los datos de la API.
        // Para imprimir las propiedades en el html deberemos llamarlas item.prop (en este caso user.name para mostrar el nombre)
      },
      error: (e) => {
        console.log(e);
      }
    }); // Para terminar la petición a la API definida en el servicio asociado (user.service.ts), se debe aplicar el metodo .subscribe sobre la funcion creada para ello. Este método tiene dos propiedades: next (código que se ejecuta si la peticion sale bien) y error (código que se ejecuta cuando la petición da error)
    // Este código es siempre el mismo para cualquier petición a una API, únicamente variará el nombre del servicio y la variable getItem() creada en este servicio para inicializar la peticion
  }
}
