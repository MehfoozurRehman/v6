import dayjs from "dayjs";

export default (dateString: string | number | Date) => {
  const years = dayjs().diff(dayjs(dateString), "month") / 12;
  return Math.round(years);
};
