import { Component, OnInit } from '@angular/core';

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
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';

  ngOnInit(): void {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks)
      }
  }

  saveTasks(): void{
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(){
    if(this.newTask.trim() !== ''){
      const task: Task = {
        id: this.tasks.length + 1,
        title: this.newTask.trim(),
        editing: false
      };
      this.tasks.push(task);
      this.newTask = '';
      this.saveTasks();
    }
  }

  editTask(task: Task) {
    task.editing = !task.editing
    this.saveTasks();
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if(index !== -1){
      this.tasks.splice(index, 1)
      this.saveTasks();
    }
  }

}
