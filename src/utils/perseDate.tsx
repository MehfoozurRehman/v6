import dayjs from "dayjs";

export default function parseDate(dateString: string | number | Date) {
  return dayjs(dateString).format("DD MMM YYYY");
}
