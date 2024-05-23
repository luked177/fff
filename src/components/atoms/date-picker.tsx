"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/button";
import { Calendar } from "@/components/atoms/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover";
import { Input } from "./input";

export function DatePicker({ name, required = false }: { name: string; required?: boolean }) {
	const [date, setDate] = React.useState<Date>();

	return (
		<div className="flex flex-col">
			<Input hidden name={name} className="hidden" value={date?.toUTCString()} />
			<Popover>
				<PopoverTrigger asChild>
					<Button variant={"outline"} className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date ? format(date, "PPP") : <span>Pick a date</span>}
						{required && <span>*</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
				</PopoverContent>
			</Popover>
		</div>
	);
}
