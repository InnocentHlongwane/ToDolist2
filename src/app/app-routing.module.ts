import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTasksComponent} from './create-tasks/create-tasks.component';

const routes: Routes = [{path: 'createTasks',component: CreateTasksComponent},{path: 'Tasks',component: TasksComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
