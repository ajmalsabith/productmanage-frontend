import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PManageComponent } from './components/products/p-manage/p-manage.component';
import { HomeComponent } from './components/main/home/home.component';
import { PAddComponent } from './components/products/p-add/p-add.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';

const routes: Routes = [
  {path:'list',component:PManageComponent},
  {path:'home',component:HomeComponent},
  {path:'add',component:PAddComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
