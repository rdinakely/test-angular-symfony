import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {ExamStatusEnum} from '../../../features/exam-list/enum/exam-status.enum';
import {faCheck, faHourglassHalf, faLocationArrow, faTimes} from '@fortawesome/free-solid-svg-icons';
import {ExamStatusTextMapping} from './exam-status-text.mapping';

export interface ExamStatusDisplay {
  icon: IconDefinition
  class: string
  text: string
}

export const ExamStatusMapping: Record<ExamStatusEnum, ExamStatusDisplay> = {
  [ExamStatusEnum.SearchingForPlace]: {
    icon: faHourglassHalf,
    class: 'text-gray-600 bg-gray-100',
    text: ExamStatusTextMapping[ExamStatusEnum.SearchingForPlace],
  },

  [ExamStatusEnum.Confirmed]: {
    icon: faCheck,
    class: 'text-green-600 bg-green-100',
    text: ExamStatusTextMapping[ExamStatusEnum.Confirmed],
  },

  [ExamStatusEnum.ToBeScheduled]: {
    icon: faLocationArrow,
    class: 'text-orange-600 bg-orange-100',
    text: ExamStatusTextMapping[ExamStatusEnum.ToBeScheduled],
  },

  [ExamStatusEnum.Cancelled]: {
    icon: faTimes,
    class: 'text-red-600 bg-red-100',
    text: ExamStatusTextMapping[ExamStatusEnum.Cancelled],
  },
}
