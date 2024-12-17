import { Component } from '@angular/core';
import {StatisticItemComponent} from '../../components/statistic-item/statistic-item.component';
import {faCheckCircle, faClipboardList, faClock, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-statistic',
  standalone: true,
  templateUrl: './statistic.component.html',
  imports: [
    StatisticItemComponent
  ],
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent {

  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faClipboardList = faClipboardList;
  protected readonly faXmark = faXmark;
  protected readonly faClock = faClock;
}
