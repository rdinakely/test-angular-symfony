<?php

namespace App\Enum;

enum ExamStatusEnum: string
{
    case Confirmed = 'confirmed';
    case ToBeScheduled = 'to_be_scheduled';
    case Cancelled = 'cancelled';
    case SearchingForPlace = 'searching_for_place';
}
