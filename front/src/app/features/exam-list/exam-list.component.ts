import {Component, Signal, WritableSignal} from '@angular/core';
import {ExamItemComponent} from '../../components/exam-item/exam-item.component';
import {ExamStoreService} from './services/exam-store.service';
import {ExamDto} from './dto/exam.dto';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  standalone: true,
  imports: [ExamItemComponent, NgForOf],
})
export class ExamListComponent {
  public readonly futureExamsCount: Signal<number>
  public readonly examsList: WritableSignal<ExamDto[]>

  constructor(
    private readonly examStore: ExamStoreService,
    protected readonly router: Router
  ) {
    this.examsList = this.examStore.exams
    this.futureExamsCount = this.examStore.futureExamsCount
  }

  redirectToAddExam() {
    this.router.navigate(['/add-exam'])
  }
}
