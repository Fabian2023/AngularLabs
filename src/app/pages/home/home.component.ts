import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

import{Task} from "../../models/task.model"

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id:Date.now(),
      title:"Instalar Angular CLI",
      completed: false
    },
    {
      id:Date.now(),
      title:"Crear Proyecto",
      completed: false
    },
    {
      id:Date.now(),
      title:"Crear Componente",
      completed: false
    }
    
  ]);
  //agregar tareas
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask)
    
  }

  addTask(title:string){
    const newTask ={
      id: Date.now(),
      title,
      completed:false

    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  //eliminar tareas
  deleteTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }
}
