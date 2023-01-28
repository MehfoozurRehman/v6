export function parseDate(date: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date && date.replace(/-/g, "").substring(0, 4);
  const month =
    date && date.replace(/-/g, "").substring(0, 6).replace(year, "");
  const day =
    date &&
    date
      .replace(/-/g, "")
      .substring(0, 8)
      .replace(year + month, "");
  return (
    day +
    " " +
    months.filter((item, i) => i === parseInt(month) - 1) +
    " " +
    year
  );
}
