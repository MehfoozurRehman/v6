import dayjs from "dayjs";

export default (dateString: string | number | Date) =>
  Math.round(dayjs().diff(dayjs(dateString), "months") / 12);
