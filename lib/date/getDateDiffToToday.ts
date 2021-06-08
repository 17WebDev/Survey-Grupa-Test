import Dayjs from 'dayjs';

import { TimeUnit } from './TimeUnit';

/**
 * Get date difference to today.
 *
 * @param date - Date to compare.
 */
export function getDateDiffToToday(date: Date) {
  let result = {
    // Time difference
    time: 0,
    // Time unit
    unit: TimeUnit.SECONDS,
  };

  const today = Dayjs();

  if (today.diff(date, TimeUnit.SECONDS) < 60) {
    result = {
      time: today.diff(date, TimeUnit.SECONDS),
      unit: TimeUnit.SECONDS,
    };
  } else if (today.diff(date, TimeUnit.MINUTES) < 60) {
    result = {
      time: today.diff(date, TimeUnit.MINUTES),
      unit: TimeUnit.MINUTES,
    };
  } else if (today.diff(date, TimeUnit.HOURS) < 24) {
    result = {
      time: today.diff(date, TimeUnit.HOURS),
      unit: TimeUnit.HOURS,
    };
  } else {
    result = {
      time: today.diff(date, TimeUnit.DAYS),
      unit: TimeUnit.DAYS,
    };
  }

  return result;
}
