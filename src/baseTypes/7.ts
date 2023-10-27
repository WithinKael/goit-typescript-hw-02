/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY;
}
const isDayWeekend: boolean = isWeekend(DaysOfWeek.TUESDAY);
console.log(isDayWeekend);
