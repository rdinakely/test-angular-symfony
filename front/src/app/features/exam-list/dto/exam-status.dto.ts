import {ExamStatusEnum} from '../enum/exam-status.enum';

const statusLabelMapping: Record<ExamStatusEnum, string> = {
  [ExamStatusEnum.Confirmed]: 'Confirmé',
  [ExamStatusEnum.ToBeScheduled]: 'A planifier',
  [ExamStatusEnum.Cancelled]: 'Annulé',
  [ExamStatusEnum.SearchingForPlace]: 'En recherche de place',
}

export class ExamStatusDto {
  public readonly value: ExamStatusEnum
  public readonly label: string

  constructor(
    status: ExamStatusEnum
  ) {
    this.value = status
    this.label = statusLabelMapping[status]
  }

  public isToBeScheduled(): boolean {
    return this.value === ExamStatusEnum.ToBeScheduled
  }
}
