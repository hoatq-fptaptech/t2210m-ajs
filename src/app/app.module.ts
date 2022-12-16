import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassesComponent} from "./classes/classes.component";
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/category/category.component";
import { ProductComponent } from './pages/product/product.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {HttpClientModule} from "@angular/common/http";

//1. khai bao danh sach cac routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
]
@NgModule({
  declarations: [
    AppComponent,StudentComponent,ClassesComponent,
    HomeComponent,CategoryComponent, ProductComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
