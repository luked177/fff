"use client";
import { Button } from "@/components/atoms/button";
import { CardContent, Card } from "@/components/atoms/card";
import { Label } from "@/components/atoms/label";
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/atoms/select";
import { Input } from "@/components/atoms/input";
import { DatePicker } from "../atoms/date-picker";
import { useFormState } from "react-dom";
import { scheduleGame } from "@/actions/scheduleGame";
import { useEffect } from "react";
import { toast } from "sonner";
import { CalendarPlus } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "../atoms/dialog";

export const GameScheduler = () => {
	const [state, dispatch] = useFormState(scheduleGame, { success: false, errors: {} });

	useEffect(() => {
		if (state && state.success === true) {
			toast("Game succesfully scheduled!");
			const drawer = document.getElementById("schedule-game-drawer");
			drawer?.click();
		}
	}, [state]);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"ghost"} className="justify-self-end">
					<CalendarPlus />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="text-2xl font-bold">Schedule a Game</DialogHeader>
				<Card>
					<CardContent>
						<form noValidate className="flex flex-col gap-4" action={dispatch}>
							<div>
								<Label htmlFor="sport">Sport</Label>
								<Select name="sport">
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select a sport" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="football">Football</SelectItem>
											<SelectItem value="basketball">Basketball</SelectItem>
											<SelectItem value="tennis">Tennis</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								{state?.errors.sport && <Label className="text-red-500">{state?.errors.sport.join(". ")}</Label>}
							</div>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
								<div>
									<Label htmlFor="location">Location</Label>
									<Input name="location" placeholder="Enter location" />
									{state?.errors.location && <Label className="text-red-500">{state?.errors.location.join(". ")}</Label>}
								</div>
								<div>
									<Label htmlFor="maxPlayers">Max Players</Label>
									<Input type="number" name="maxPlayers" placeholder="Enter max players" />
									{state?.errors.maxPlayers && <Label className="text-red-500">{state?.errors.maxPlayers.join(". ")}</Label>}
								</div>
								<div>
									<Label htmlFor="duration">Duration</Label>
									<Input type="number" step={"5"} name="duration" placeholder="Enter duration" />
									{state?.errors.duration && <Label className="text-red-500">{state?.errors.duration.join(". ")}</Label>}
								</div>
								<div>
									<Label htmlFor="gameName">Name</Label>
									<Input name="gameName" placeholder="Enter game name" />
									{state?.errors.gameName && <Label className="text-red-500">{state?.errors.gameName.join(". ")}</Label>}
								</div>
								<div>
									<Label htmlFor="date">Date</Label>
									<DatePicker name="date" />
									{state?.errors.date && <Label className="text-red-500">{state?.errors.date.join(". ")}</Label>}
								</div>
								<div>
									<Label htmlFor="time">Time</Label>
									<Input name="time" type="time" />
									{state?.errors.time && <Label className="text-red-500">{state?.errors.time.join(". ")}</Label>}
								</div>
							</div>
							<div className="col-span-1 sm:col-span-2 lg:col-span-1">
								<Button className="w-full" type="submit">
									Schedule Game
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</DialogContent>
			<DialogClose id="schedule-game-drawer" />
		</Dialog>
	);
};
