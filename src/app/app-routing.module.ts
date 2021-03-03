import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/users/edit/edit.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: "",
    component: UsersComponent
  },
  {
    path: "user/add/:id",
    component: EditComponent,
  },
  {
    path: "user/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
