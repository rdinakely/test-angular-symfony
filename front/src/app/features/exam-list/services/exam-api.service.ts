import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {AddExamType, ExamDto} from '../dto/exam.dto';
import {ApiCollectionDto} from '../dto/api-collection.dto';

@Injectable({ providedIn: 'root' })
export class ExamApiService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public getExams(): Observable<ExamDto[]> {
    return this.httpClient
      .get<ApiCollectionDto<ExamDto>>('/api/exams')
      .pipe(
        map(({ member: examsList }) => examsList.map((item) => ExamDto.fromApi(item) )),
      )
  }

  public addExam(exam: AddExamType): Observable<ExamDto> {
    return this.httpClient
      .post<ExamDto>('/api/exams', {
        studentName: exam.studentName,
        location: exam.location || undefined,
        date: exam.date || undefined,
        time: exam.time || undefined,
        status: exam.status,
      })
      .pipe(
        map(ExamDto.fromApi),
      )
  }
}
