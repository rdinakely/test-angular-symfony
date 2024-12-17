import {ExamStatusEnum} from '../enum/exam-status.enum';
import {ExamStatusDto} from './exam-status.dto';

export class ExamDto {
  public readonly status: ExamStatusDto

  public constructor(
    public readonly id: number,
    public readonly studentName: string,
    public readonly location: string|undefined,
    public readonly date: string|undefined,
    public readonly time: string|undefined,
    status: ExamStatusEnum,
  ) {
    this.status = new ExamStatusDto(status)
  }

  public static fromApi(data: any): ExamDto {
    return new ExamDto(
      data.id,
      data.studentName,
      data.location,
      data.date,
      data.time,
      data.status,
    );
  }
}

export interface AddExamType extends Omit<ExamDto, 'id'| 'status'> {
  status: string
}
