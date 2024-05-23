"use server";

import { toast } from "sonner";
import { z } from "zod";

const scheduleGameSchema = z.object({
	sport: z.string().min(1, "Sport cannot be empty"),
	location: z.string().min(1, "Location cannot be empty"),
	maxPlayers: z.coerce.number().gt(0, "Max players must be greater then zero"),
	duration: z.coerce.number().multipleOf(5, "Duration needs to be a multiple of 5").min(5, "Duration must be greater then zero"),
	gameName: z.string().min(1, "Name cannot be empty"),
	date: z.string().min(1, "Date cannot be empty"),
	time: z.string().min(1, "Time cannot be empty"),
});

export const scheduleGame = async (prevState: any, formData: FormData) => {
	const validatedGame = scheduleGameSchema.safeParse({
		sport: formData.get("sport"),
		location: formData.get("location"),
		maxPlayers: formData.get("maxPlayers"),
		duration: formData.get("duration"),
		gameName: formData.get("gameName"),
		date: formData.get("date"),
		time: formData.get("time"),
	});

	if (!validatedGame.success) {
		return {
			errors: validatedGame.error.flatten().fieldErrors,
			success: false,
		};
	} else {
		return {
			errors: {},
			success: true,
		};
	}
};
