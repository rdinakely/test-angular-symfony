import {Component, computed, input} from '@angular/core';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-statistic-item',
  standalone: true,
  templateUrl: './statistic-item.component.html',
  imports: [
    NgClass,
    FaIconComponent
  ]
})
export class StatisticItemComponent {
  readonly textClass = input.required<string>()
  readonly icon = input.required<IconDefinition>()
  readonly text = input.required<string>()
  readonly count = input.required<number>()
}
