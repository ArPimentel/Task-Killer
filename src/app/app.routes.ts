import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

const ROUTES: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactFormComponent},
    {path: '', component: TodoListComponent}
];

export { ROUTES }