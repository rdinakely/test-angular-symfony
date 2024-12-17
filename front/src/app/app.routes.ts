import { Routes } from '@angular/router';
import {ExamListComponent} from './features/exam-list/exam-list.component';
import {AddExamComponent} from './features/add-exam/add-exam.component';

export const routes: Routes = [
  {
    path: '',
    component: ExamListComponent,
  },
  {
    path: 'add-exam',
    component: AddExamComponent,
  }
];
