import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CategoryListComponent } from './components/pages/category/category-list/category-list.component';

const routes = [
    {path: 'login', component: LoginComponent},
    {path: 'categories/list', component: CategoryListComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      CategoryListComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
