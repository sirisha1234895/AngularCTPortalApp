import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewUserComponent } from './viewuser.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        redirectTo: 'viewuser'
      },
      
      {
        path: 'viewuser',
        component: ViewUserComponent,
        data: {
          title: 'View User'
        }
      },
      {
        path: 'adduser',
        component: RegistrationComponent,
        data: {
          title: 'Register User'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
