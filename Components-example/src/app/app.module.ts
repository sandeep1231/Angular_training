import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { Test1Component } from './test1/test1.component';
import { ChildTest1Component } from './test1/child-test1/child-test1.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'parentcomp', component: ParentComponentComponent },
  { path: 'test1', component: Test1Component },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    HomeComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    Test1Component,
    ChildTest1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
