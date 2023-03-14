export function getExperience(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diff - years * (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const yearsWithMonths = years + "." + months;

  return parseFloat(yearsWithMonths).toPrecision(1);
}
