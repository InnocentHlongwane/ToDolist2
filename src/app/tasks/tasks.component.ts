import { Component, OnInit } from '@angular/core';
import { TasksService } from '../ToDoList/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
check =false

taskss
  constructor(public taskService :TasksService) {
    
    this.taskss=this.taskService.newTask()
   
   }

  ngOnInit() {
  }
deleteTask(tasks){
  this.taskService.deleteTask(tasks)
}
editTask(tasks){
  this.taskService.EditTask(tasks)
}
}

