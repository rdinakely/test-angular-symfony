import {Component, computed, input, Signal} from '@angular/core';
import {ExamDto} from '../../features/exam-list/dto/exam.dto';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCalendar, faClock, faMapMarker, faUser} from '@fortawesome/free-solid-svg-icons';
import {DatePipe, NgClass} from '@angular/common';
import {ExamStatusEnum} from '../../features/exam-list/enum/exam-status.enum';
import {ExamStatusDisplay, ExamStatusMapping} from './mapping/exam-status.mapping';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  standalone: true,
  imports: [
    FaIconComponent,
    DatePipe,
    NgClass
  ]
})
export class ExamItemComponent {
  public readonly exam = input.required<ExamDto>()
  protected readonly statusConfig: Signal<ExamStatusDisplay> = computed(() => ExamStatusMapping[this.exam().status.value])

  protected readonly faUser = faUser;
  protected readonly faCalendar = faCalendar;
  protected readonly ExamStatusEnum = ExamStatusEnum;
  protected readonly faMapMarker = faMapMarker;
  protected readonly faClock = faClock;
}
