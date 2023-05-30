import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';
  editedTask: string = '';

  addTask(){
    if(this.newTask.trim() !== ''){
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  editTask(task: string) {
    const current = this.tasks.indexOf(task)
    if(current !== -1 ){
      if(this.editedTask && this.editedTask.trim() !== ''){
        this.tasks[current] = this.editedTask.trim()
      }
    } else {
      console.log("Task not found")
    }
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if(index !== -1){
      this.tasks.splice(index, 1)
    }
  }

}
