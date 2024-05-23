import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/en";
dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.locale("en");

export function formatDateToRelativeDate(startDate: string, duration: number) {
	const start = dayjs.utc(startDate);
	const now = dayjs.utc();
	const tomorrow = now.add(1, "day");
	const end = dayjs.utc(startDate).add(duration, "minutes");
	const time = `${start.format("HH:mm")} - ${end.format("HH:mm")}`;

	if (start.isSame(now, "day")) return `Today, ${time}`;
	if (start.isSame(tomorrow, "day")) return `Tomorrow, ${time}`;
	if (start.diff(now, "day") < 6) return `${start.format("dddd")}, ${time}`;
	return `${start.utc().format("D MMMM")}, ${time}`;
}
