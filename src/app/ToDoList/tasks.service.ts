import { Injectable } from '@angular/core';
import { TasksComponent } from '../tasks/tasks.component';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks =[{taskDesc:"cooking",taskPrior:"high",taskDate:"02-12-2018"}]

  NewDesc:string=""
  NewPrior:string=""
  newDate:string=""

    constructor() {}
   
  AddTask(NewDesc,NewPrior, newDate){
   this.tasks.push({taskDesc:NewDesc,taskPrior: NewPrior, taskDate:newDate})
    this.NewDesc =''
    this.NewPrior=''
    this.newDate=''
  }
  deleteTask(task){
    let index =this.tasks.indexOf(task)
    this.tasks.splice(index,1)
    if (this.tasks.length <=0){
      
    }
  }

 EditTask(task){
   let index = this.tasks.indexOf(task)
   let nTask =prompt("edit Task:", task.taskDesc)
   let nPriority =prompt("edit priority",task.taskDesc)
   let nDate = prompt("edit date",task.task)
   if(nTask != null || nPriority != null){
     this.tasks[index].taskDesc =nTask
     this.tasks[index].taskPrior=nPriority
     this.tasks[index].taskDate=nDate
    }
   }

   newTask(){
     return this.tasks
  
 }
  }