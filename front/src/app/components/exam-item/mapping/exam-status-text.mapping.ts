import {ExamStatusEnum} from '../../../features/exam-list/enum/exam-status.enum';

export const ExamStatusTextMapping: Record<ExamStatusEnum, string> = {
  [ExamStatusEnum.SearchingForPlace]: 'En recherche de place',
  [ExamStatusEnum.Confirmed]: 'Confirmé',
  [ExamStatusEnum.ToBeScheduled]: 'A organiser',
  [ExamStatusEnum.Cancelled]: 'Annulé',
}
