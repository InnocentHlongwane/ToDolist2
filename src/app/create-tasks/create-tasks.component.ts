import { Component, OnInit } from '@angular/core';
import { TasksService } from '../ToDoList/tasks.service';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent implements OnInit {

  taskssss
  constructor(public taskservice :TasksService) {
    this.taskssss =this.taskservice.newTask()
   }
   AddTask(NewDesc,NewPrior, newDate){
     this.taskservice.AddTask(NewDesc,NewPrior, newDate)
   }
  ngOnInit() {
  }

}