import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { CategoryComponent } from "./category/category.component";

const ROUTES: Routes = [
    {path: 'about', component: AboutComponent},
    {path: '', component: TodoListComponent},
    {path: 'category', component: CategoryComponent}
];

export { ROUTES }