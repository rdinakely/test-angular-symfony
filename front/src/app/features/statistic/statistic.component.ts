import {Component, computed, inject, Signal} from '@angular/core';
import {StatisticItemComponent} from '../../components/statistic-item/statistic-item.component';
import {faCheckCircle, faClipboardList, faClock, faXmark} from '@fortawesome/free-solid-svg-icons';
import {ExamStoreService} from '../exam-list/services/exam-store.service';
import {ExamStatusEnum} from '../exam-list/enum/exam-status.enum';

@Component({
  selector: 'app-statistic',
  standalone: true,
  templateUrl: './statistic.component.html',
  imports: [
    StatisticItemComponent
  ],
})
export class StatisticComponent {
  protected readonly confirmedCount: Signal<number>;
  protected readonly toBeScheduledCount: Signal<number>;
  protected readonly cancelledCount: Signal<number>;
  protected readonly searchingForPlaceCount: Signal<number>;

  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faClipboardList = faClipboardList;
  protected readonly faXmark = faXmark;
  protected readonly faClock = faClock;

  private readonly examStoreService = inject(ExamStoreService)

  constructor() {
    this.confirmedCount = computed(() => this.examStoreService.getCountByStatus(ExamStatusEnum.Confirmed));
    this.toBeScheduledCount = computed(() => this.examStoreService.getCountByStatus(ExamStatusEnum.ToBeScheduled));
    this.cancelledCount = computed(() => this.examStoreService.getCountByStatus(ExamStatusEnum.Cancelled));
    this.searchingForPlaceCount = computed(() => this.examStoreService.getCountByStatus(ExamStatusEnum.SearchingForPlace));
  }
}
