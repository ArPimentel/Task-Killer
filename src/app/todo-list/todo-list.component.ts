import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask(){
    if(this.newTask.trim() !== ''){
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  editTask() {
    const current = this.tasks.indexOf(task)
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if(index !== -1){
      this.tasks.splice(index, 1)
    }
  }

}
