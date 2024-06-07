import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Para acceder a la ruta parametrizada de cada item de un listado con links se debe importar el modulo "ActivateRoute"
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any | undefined; // Se crea la variable para alojar el contenido del item seleccionado al hacer click en el listado, y se define su tipo. Se le asinga el tipo "any[]" ya que se debería crear un modelo con la estructura del array de objeto que vayamos a importar, pero para ejemplo vale con any

  constructor(
    private route: ActivatedRoute, // Para usar una ruta parametrizada definida en el archivo routes.ts se debe declarar en el argumento del constructor y definirla como una "private route" (private route: ActivatedRoute)
    public userService: UserService // Importar el servicio donde se define la función de petición a la API (en este caso UserService)
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Se crea una variable para alojar la ruta. En el valor dado a la variable entre corchetes [] "route.snapshot.params['parametro']" debe definir el parámetro que vamos a pasar en el archivo app.routes.ts (path: 'pagRaiz/:parametro'). 
    // En este caso, el valor definido entre corchetes ['id'] debe ser el mismo que el parámetro de la ruta en app.routes.ts (path: 'users/:id').

    this.getUserComp(id); // Declara la función definida abajo para que se ejecute y muestre la información de un determinado item definido por el "id" incluido en el argumento
  }

  // Para terminar la petición a la API definida en el servicio asociado (user.service.ts), se debe aplicar el metodo .subscribe sobre la funcion creada para ello. Este método tiene dos propiedades: next (código que se ejecuta si la peticion sale bien) y error (código que se ejecuta cuando la petición da error). Como solo se quiere coger la información de un solo objeto del array, se le da como argumento la propiedad id usada como referencia y su tipo (id: number)
  getUserComp(id: number) {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.selectedUser = data; // Declarar la variable creada para mostrar la información de cada item seleccionado "selectedItem" (en este caso selectedUser) y se le asigna el contenido importado de la API
        // Para imprimir las propiedades en el html deberemos llamarlas item.prop (en este caso user.name para mostrar el nombre)
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

}
