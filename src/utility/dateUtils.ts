/**
 * Returns the start (00:00:00.000) and end (23:59:59.999) of the given day in milliseconds.
 * If no date is provided, it defaults to today.
 *
 * @param date Optional Date object (defaults to today)
 * @returns Object with fromDateMs and toDateMs in milliseconds
 */
export function getStartEndOfDayMs(date?: Date): { fromDateMs: number; toDateMs: number } {
  const baseDate = date ? new Date(date) : new Date();

  // Start of day: 00:00:00.000
  const start = new Date(baseDate);
  start.setHours(0, 0, 0, 0);
  const fromDateMs = start.getTime();

  // End of day: 23:59:59.999
  const end = new Date(baseDate);
  end.setHours(23, 59, 59, 999);
  const toDateMs = end.getTime();

  return { fromDateMs, toDateMs };
}


export const timeOnly = (dateInsertedStr: string) => new Date(dateInsertedStr).toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

export const mstoDate = (ms: number) => {
  // Subtract the delay from the current time
  const date = new Date(Date.now() - ms);

  const formatted = date.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  console.log(formatted); // e.g., "24.05.2025, 12:34"

  return formatted;
};

