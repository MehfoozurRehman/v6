export default function getExperience(dateString: string | number | Date) {
  const diffInMs = Date.now() - new Date(dateString).getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
  return diffInYears.toPrecision(1);
}
