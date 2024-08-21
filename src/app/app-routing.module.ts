import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { GraficosComponent } from './pages/graficos/graficos.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'users/list', component: UsersComponent },
  {path: 'users/details', component: UserComponent },
  {path: 'dash', component: GraficosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
