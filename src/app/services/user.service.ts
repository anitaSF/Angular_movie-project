import { HttpClient } from '@angular/common/http'; // Importar módulo para poder hacer una petición a una API
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://jsonplaceholder.typicode.com/users'; // Crear una variable para alojar la ruta de la API desde donde vamos a importar los datos

  users: any[]; // Crear la variable para alojar el array de objetos que se va a importar de la API. Se le asinga el tipo "any[]" ya que se debería crear un modelo con la estructura del array de objeto que vayamos a importar, pero para ejemplo vale con any[] (array de tipo x vacio)

  // Para hacer una petición a un API se debe declarar en el argumento del constructor que vamos a traer información de un cliente http (private http: HttpClient). Se debe importar el módulo arriba también
  // Para que funcione, en el archivo general del proyecto app.config.ts se debe importar en providers: [provideHttpClient()]
  constructor(private http: HttpClient) {
    this.users = []; // Declarar la variable creada para alojar la información importada de la API para cada objeto del array. Se deja vacía ya que los datos vienen de la API
  }

  getUsers() {
    return this.http.get<any>(this.API_URL)
  } // Se crea una funcion para inicializar la peticion a la API: para coger toda la información con el método .get con el tipo de dato entre <>, y con return para guardar y devolver la información cuando se llame a la función: getItems() {return this.http.get<tipo_dato>(this.API_URL).
  // Esta función se utilizará siempre para las peticiones a API. Únicamente cambiará el nombre dependiendo del tipo de proyecto: sera "getItem()", siendo Item el tipo de objeto con el que se trabaje en cada proyecto. En este caso al ser User, es getUsers

  // Para terminar de realizar la petición, desde el .ts del componente donde se imprimirá la información, se debe llamar a esta función getUsers y aplicarle el método .suscribe

  
}
