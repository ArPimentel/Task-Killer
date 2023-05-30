import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  editing: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask(){
    if(this.newTask.trim() !== ''){
      const task: Task = {
        id: this.tasks.length + 1,
        title: this.newTask.trim(),
        editing: false
      };
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  editTask(task: Task) {
    task.editing = !task.editing
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if(index !== -1){
      this.tasks.splice(index, 1)
    }
  }

}
