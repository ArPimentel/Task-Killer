import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const ROUTES: Routes = [
    {path: 'about', component: AboutComponent},
    {path: '', component: TodoListComponent}
];

export { ROUTES }