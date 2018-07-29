import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
{ path: 'home',  component: HomeComponent },
{ path: 'about', component: AboutComponent}
];
@NgModule({
declarations:[],
imports:[
RouterModule.forRoot(appRoutes)],
exports: [ RouterModule ]
})
export class AppRoutingModule {}