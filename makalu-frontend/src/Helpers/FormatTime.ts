export function FormatTime(time: string) {
    const [hour, minute] = time.split(':');
  let hours = parseInt(hour);
  const minutes = parseInt(minute);
  const isPM = hours >= 12; 
  const formattedHour = hours % 12 || 12; // Convert 24-hour format to 12-hour
  const formattedMinute = minutes.toString().padStart(2, '0');
  const ampm = isPM ? 'PM' : 'AM';

  return `${formattedHour}:${formattedMinute} ${ampm}`; 
}