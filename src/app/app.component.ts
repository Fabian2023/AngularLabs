import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'hola locas';
  tasks=[
    "instalar el angular cli",
    "crear proyecto",
    "crear componentes"
  ]
}
