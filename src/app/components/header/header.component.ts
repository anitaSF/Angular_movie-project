import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Módulo de angular para trabajar en un componente con rutas establecidas en el archivo general "app.routes.ts" y navegar entre componentees del mismo proyecto

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
