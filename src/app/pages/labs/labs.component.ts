import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-labs',
  imports: [ NgFor],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola locas';
  tasks=[
    "instalar el angular cli",
    "crear proyecto",
    "crear componentes"
  ]
  name ="Santiago"
  edad = 39


}
