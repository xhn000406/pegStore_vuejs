import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// dayjs.extend(utc);

// const DATA_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

// export function formatUtcString(
//   utcString: string,
//   format: string = DATA_TIME_FORMAT
// ): any {
//   return dayjs.utc(utcString).format(format);
// }

export function transformStamp(
  timestamp: string | number | dayjs.Dayjs | Date | null | undefined
) {
  dayjs.extend(utc);
  return dayjs.utc(timestamp).format("YYYY-MM-DD HH:mm:ss");
}
