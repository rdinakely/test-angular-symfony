import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ExamStatusTextMapping} from '../../components/exam-item/mapping/exam-status-text.mapping';
import {ExamStatusEnum} from '../exam-list/enum/exam-status.enum';
import {DatePipe} from '@angular/common';
import {ExamApiService} from '../exam-list/services/exam-api.service';
import {Router} from '@angular/router';
import {ExamStoreService} from '../exam-list/services/exam-store.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  standalone: true,
  styleUrl: 'add-exam.component.scss',
  imports: [
    ReactiveFormsModule,
    DatePipe
  ]
})
export class AddExamComponent {
  private readonly router = inject(Router)
  private readonly formBuilder = inject(FormBuilder)
  private readonly examApiService = inject(ExamApiService)
  private readonly examStoreService = inject(ExamStoreService)

  protected readonly form: FormGroup
  protected readonly todayDate = new Date()
  protected readonly statusOptions: { label: string, value: string }[]

  constructor() {
    this.form = this.formBuilder.group({
      studentName: ['', Validators.required],
      location: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: [ExamStatusEnum.ToBeScheduled],
    })

    this.statusOptions = Object
      .entries(ExamStatusTextMapping)
      .map(([value, label]) => ({ value, label }))
  }

  addExam() {
    if (!this.form.valid) {
      this.form.markAsDirty()
      return
    }

    this.examApiService.addExam(this.form.value)
      // .pipe(catchError((error) => {
      //   console.log('Error adding exam', error)
      //
      //   return of({ error: true })
      // }))
      .subscribe((result) => {
        this.examStoreService.examIsAdded(result)
        this.router.navigate(['/'])
      })
  }
}
