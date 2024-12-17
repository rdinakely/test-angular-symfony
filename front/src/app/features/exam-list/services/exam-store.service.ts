import {computed, Injectable, Signal, signal} from '@angular/core';
import {ExamApiService} from './exam-api.service';
import {ExamDto} from '../dto/exam.dto';
import {ExamStatusEnum} from '../enum/exam-status.enum';

@Injectable({ providedIn: 'root' })
export class ExamStoreService {
  public readonly isLoading = signal(false)
  public readonly exams = signal<ExamDto[]>([])
  public readonly futureExamsCount: Signal<number>

  constructor(
    private readonly examApiService: ExamApiService,
  ) {
    this.futureExamsCount = computed(() => this.exams()
      .filter((item) => item.status.isToBeScheduled())
      .length
    )
  }

  public loadExams(): void {
    this.isLoading.set(true)
    this.examApiService
      .getExams()
      .subscribe((exams) => {
        this.exams.set(exams)
        this.isLoading.set(false)
      })
  }

  public getCountByStatus(status: ExamStatusEnum): number {
    return this.exams().filter((exam) => exam.status.value === status).length
  }

  public examIsAdded(exam: ExamDto): void {
    this.exams.set([...this.exams(), exam])
  }
}
