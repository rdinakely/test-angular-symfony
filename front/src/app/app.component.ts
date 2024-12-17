import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StatisticComponent} from './features/statistic/statistic.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, StatisticComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front';
}
