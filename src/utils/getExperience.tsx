import dayjs from "dayjs";

export default function getExperience(dateString: string | number | Date) {
  return dayjs().diff(dayjs(dateString), "year");
}
