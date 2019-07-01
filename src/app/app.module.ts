import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import {MatInputModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatIconModule,MatCheckboxModule,MatCardModule,MatFormFieldModule} from'@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
