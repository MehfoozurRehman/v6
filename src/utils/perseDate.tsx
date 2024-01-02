import dayjs from "dayjs";

export default (dateString: string | number | Date) =>
  dayjs(dateString).format("DD MMM YYYY");
