import {computed, Injectable, Signal, signal} from '@angular/core';
import {ExamApiService} from './exam-api.service';
import {ExamDto} from '../dto/exam.dto';

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
    if (this.exams().length > 0) {
      return
    }

    this.isLoading.set(true)
    this.examApiService
      .getExams()
      .subscribe((exams) => {
        this.exams.set(exams)
        this.isLoading.set(false)
      })
  }

  public examIsAdded(exam: ExamDto): void {
    this.exams.set([...this.exams(), exam])
  }
}
