import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'; // Importar modulo para trabajar con formularios reactivos
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm: FormGroup; // Se definen el tipo de variable que es cada elemento del formulario. Para el formulario completo <form></form> por defecto es "FormGroup"
  id: FormControl; // Para los campos del formulario <input> por defecto es "FormControl"
  name: FormControl;
  email: FormControl;
  address: FormGroup; // Se crea una nueva variable FormGroup que se asocia a un nuevo elemento <form></form> para alojar la información de la propiedad address que es a su vez un objeto con 2 subpropiedades

  // Importar en el argumento del constructor el servicio asociado al componente donde se definen las funciones y métodos respectivos al formulario
  constructor(public userService: UserService) {
    this.id = new FormControl('');
    this.name = new FormControl('');
    this.email = new FormControl(''); // Declarar cada variable con valor vacío ya que la información vendrá de cad campo input del formulario html
    this.address = new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }); // Declarar la nueva variable FormGroup para la propiedad "address" con sus dos subvariables asociadas a los 2 campos imput del formulario

    this.userForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,
      address: this.address,
    }); // Declarar la variable formulario con cada una de sus variables internas para cada input. Cada uno se corresponde con una propiedad del objeto importados de la API, ya que es lo que queremos añadir
  }

  postUser() {
    console.log(this.userForm.value);

    this.userService.postUser(this.userForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  } // Crear la función que define el código a ejecutar cuando se activa el evento (submit) del form de html. Esta funcion, gracias al método .subscribe(), llama a la funcion para añadir nuevo item (postItem, en el ejemplo postUser) creado en el servicio asociado (userService) y en el parámetro se incluye el valor recogido de los campos del formulario (this.itemForm.value)
}
