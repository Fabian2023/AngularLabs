import { Component, computed, signal } from '@angular/core';
import { NgFor, CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

import { Task } from '../../models/task.model';


@Component({
  selector: 'app-home',
  imports: [NgFor, CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar Angular CLI',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear Componente',
      completed: false,
    },
  ]);
  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  filter = signal("all");
  taskByFilter = computed(() => {
    const filter = this.filter()
    const tasks =this.tasks()
    if(filter === 'pending'){
      return tasks.filter(task=> !task.completed) 
    }
    if(filter === 'completed'){
      return tasks.filter(task=> task.completed) 
    }
    return tasks
  })

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  //agregar tareas
  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  //eliminar tareas
  deleteTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }
  //tarea completada
  completeTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task, position) =>
        position === index ? { ...task, completed: true } : task
      )
    );
  }

  updateTaskEditingMode(index: number) {
    this.tasks.update((tasks) =>
      tasks.map((task: Task, position: number) => {
        if (position === index) {
          return {
            ...task,
            editing: true, 
          };
        }
        return { ...task, editing: false };
      })
    );
  }

  updateTaskText(index: number, event:Event) {
    const input = event.target as HTMLInputElement
    this.tasks.update((tasks) =>
      tasks.map((task: Task, position: number) => {
        if (position === index) {
          return {
            ...task,
            title: input.value, 
            editing:false
          };
        }
        return task
      })
    );
  }

changeFilter(filter:string){
  this.filter.set(filter)
}
}
