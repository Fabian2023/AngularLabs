import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [NgFor],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Bienvenidos al curso de front';
  tasks =signal(  ['instalar el angular cli', 
           'crear proyecto', 
           'crear componentes'
          ])
  person = {
    name: signal('Santiago'),
    edad: signal (39),
  };

  clickHandler (){
    alert("hola perroskys")
  }

}
