import {Component, inject, OnInit} from '@angular/core';
import {StatisticComponent} from '../../features/statistic/statistic.component';
import {RouterOutlet} from '@angular/router';
import {ExamStoreService} from '../../features/exam-list/services/exam-store.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-authenticated-layout',
  imports: [
    StatisticComponent,
    RouterOutlet
  ],
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.scss',
  standalone: true
})
export class AuthenticatedLayoutComponent implements OnInit {
  private readonly examStore = inject(ExamStoreService)
  private readonly authService = inject(AuthService)

  ngOnInit() {
    this.examStore.loadExams()
  }

  logout() {
    this.authService.logout()
  }
}
