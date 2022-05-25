import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 