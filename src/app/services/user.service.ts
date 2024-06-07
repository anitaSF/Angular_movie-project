import { HttpClient } from '@angular/common/http'; // Importar módulo para poder hacer una petición a una API
import { Injectable } from '@angular/core';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://jsonplaceholder.typicode.com/users'; // Crear una variable para alojar la ruta de la API desde donde vamos a importar los datos

  users: User[]; // Crear la variable para alojar el array de objetos que se va a importar de la API. Se le asinga el tipo "User[]" correspodiente al modelo con la estructura del array de objeto que a importar, y se deja como array vacio

  // Para hacer una petición a un API se debe declarar en el argumento del constructor que vamos a traer información de un cliente http (private http: HttpClient). Se debe importar el módulo arriba también
  // Para que funcione, en el archivo general del proyecto app.config.ts se debe importar en providers: [provideHttpClient()]
  constructor(private http: HttpClient) {
    this.users = []; // Declarar la variable creada para alojar la información importada de la API para cada objeto del array. Se deja vacía ya que los datos vienen de la API
  }

  getUsers() {
    return this.http.get<User[]>(this.API_URL)
  } // Se crea una funcion para inicializar la peticion a la API: para coger toda la información con el método .get con el tipo de dato entre <>, y con return para guardar y devolver la información cuando se llame a la función: getItems() {return this.http.get<tipo_dato>(this.API_URL).
  // Esta función se utilizará siempre para las peticiones a API. Únicamente cambiará el nombre dependiendo del tipo de proyecto: sera "getItem()", siendo Item el tipo de objeto con el que se trabaje en cada proyecto. En este caso al ser User, es getUsers

  // Para terminar de realizar la petición, desde el .ts del componente donde se imprimirá la información, se debe llamar a esta función getUsers y aplicarle el método .suscribe

  getUser(id: number) {
    return this.http.get<User>(`${this.API_URL}/${id}`)
  } // Crear una función para hacer una petición a la API que devuelva la información de un item concreto para mostrala en la página detalle (user-detail). Como solo se quiere coger la info de un solo item, en el argumento de la función se debe indicar la propiedad indice de cada objeto del array y su tipo (id: number).
  // Para coger la información se ejecuta el método .get con el tipo de dato entre <>, y con return para guardar y devolver la información cuando se llame a la función. Como solo debe devolver las propiedades del objeto del array con un determinado id, la url incluida en el argumento del método, debe componerse por un string de variables (`${this.variable_URL}/${variable_parametro}`): getItem() {return this.http.get<tipo_dato>(`${this.API_URL}/${id}`). 


  // Los siguientes métodos de crear y eliminar un item no se aplican sobre la API importada en el proyecto porque no es editable. Se debería de haber importado una que si pudiera ser mofificada, pero en Consola si se ve el resultado
  postUser(user: User) {
    return this.http.post<User>(this.API_URL, user)
  } // Crear una función para añadir un nuevo objeto usuario, por ello en el argumento se incluye el objeto y su tipo (user: User), y se aplica el método .post sobre la variable url, indicando que se añade un item más y con return para devolver la información cuando se llame la función: postItem(item: tipo) {return this.http.post<tipo_obj>(this.API_URL, item)}

  deleteUser(id: number) {
    return this.http.delete<any>(`${this.API_URL}/${id}`)
  } // Crear una función para eliminar un objeto/item del array importado de la API. Para ello se aplica el método "delete" sobre el array <tipo> y en el argumento se declara un string (la variable que une la url de la API ($this.API_URL) y la variable id (/${id}) que es el parámetro que define cada item del array

}
