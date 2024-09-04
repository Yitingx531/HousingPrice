/**
 * Formats a date string or Date object into a more readable format.
 * @param date - The date to format (string or Date object)
 * @returns A formatted date string (e.g., "Jan 1, 2023")
 */
export default function formatDate(date: string | Date): string {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
  
    if (isNaN(dateObject.getTime())) {
      console.error('Invalid date:', date);
      return 'Invalid Date';
    }
  
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
  
    return dateObject.toLocaleDateString('en-US', options);
  }