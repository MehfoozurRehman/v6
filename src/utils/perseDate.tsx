export default function parseDate(dateString: string | number | Date) {
  if (!dateString) return '';

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}