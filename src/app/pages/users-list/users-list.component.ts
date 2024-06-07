import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core'; // Importar OnInit para poder trabajar con este método en la clase del componente
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  constructor(public userService: UserService) {
    // Importar el servicio donde se define la función de petición a la API (en este caso UserService)
  }

  // La función "ngOnInit" es un método por defecto de ángular para incluir la declaración de funciones que tengan lógica, sobretodo en las peticiones a API. Dejamos el constructor para declara las variables a las que se le asigna el valor directamente.
  // Se debe indicar en la clase: export class NombreComponent implements OnInit
  // Se debe importar arriba también
  ngOnInit(): void {
    this.getUsersComp(); // Declarar la función definida abajo para que se ejecute
  }


  // Para terminar la petición a la API definida en el servicio asociado (user.service.ts), se debe aplicar el metodo .subscribe sobre la funcion creada para ello. Este método tiene dos propiedades: next (código que se ejecuta si la peticion sale bien) y error (código que se ejecuta cuando la petición da error)
  getUsersComp() {
    this.userService.getUsers().subscribe({
      next: (data) => { // Dar como argumento del elemento next la información importada de la API (data)
        console.log(data);
        this.userService.users = data; // Declarar la variable array (users) creada en el servicio (userService) e igualarla al contenido del objeto importado de la API (data). Ahora el array users tendrá los objetos y propiedades de los datos de la API.
        // Para imprimir las propiedades en el html deberemos llamarlas item.prop (en este caso user.name para mostrar el nombre)
      },
      error: (e) => {
        console.log(e);
      }
    });
    // Este código es siempre el mismo para cualquier petición a una API, únicamente variará el nombre del servicio y la variable getItem() creada en este servicio para inicializar la peticion
  }


  // Crear funcion para eliminar usuario. Para ello se llama a la función creada en el servicio asociado (userService) para eliminar un item y en el atributo el parámetro por el que se selecciona el item: .deleteItem(parametro) (en este caso .deleteUser(id)). En esta función que se está creando también se incluye el parámetro y su tipo en el argumento (id: string). Es string porque aunque esté definido como number, se ha cambiado en el html para que Angular lo acepte como valor del atributo RouterLink
  // Siempre aplicar método .subscribe al trabajar con datos de API, para que si la petición es ok se ejecute la función y sino aparezca un error
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsersComp(); // Se incluye una mejora del código para que cuando se elimine un item se actualice la lista de nuevo, de ahí que llame a la función getItemComp (getUsersComp) que devuelve el array de objetos importado de la API
      },
      error: (e) => {
        console.log(e);
      },
    }); // 
  }
}
