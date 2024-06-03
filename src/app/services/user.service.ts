import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://jsonplaceholder.typicode.com/users';

  users: any[];

  // Para hacer una petición a un API se debe declarar en el argumento del constructor que vamos a traer información de un cliente http (private http: HttpClient). 
  // Para que funcione, en el archivo general del proyecto app.config.ts se debe importar en providers: [provideHttpClient()]
  constructor(private http: HttpClient) {
    this.users = [];
  }

  getUsers() {
    return this.http.get<any>(this.APY_URL)
  }
}
