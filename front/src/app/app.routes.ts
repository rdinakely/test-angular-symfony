import { Routes } from '@angular/router';
import {ExamListComponent} from './features/exam-list/exam-list.component';
import {AddExamComponent} from './features/add-exam/add-exam.component';
import {AuthenticatedLayoutComponent} from './layouts/authenticated-layout/authenticated-layout.component';
import {LoginComponent} from './features/login/login.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ExamListComponent
      },
      {
        path: 'add-exam',
        component: AddExamComponent,
      }
    ]
  },
];
