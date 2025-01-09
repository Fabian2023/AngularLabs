import { Component, signal } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [NgFor,NgIf],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Bienvenidos al curso de front';
  tasks =signal(  ['instalar el angular cli', 
           'crear proyecto', 
           'crear componentes'
          ])
  person = signal({
    name: 'Santiago',
    edad: 19,
    avatar:"https://w3schools.com/howto/img_avatar.png"
  })

  clickHandler (){
    alert("hola perroskys")
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState =>{
      return{
        ...prevState,
        edad: parseInt(newValue,10)
      }
    })
  
    
  }

}
