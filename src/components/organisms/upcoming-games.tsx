import { CalendarIcon, GoalIcon, ShoppingBasketIcon, VibrateIcon } from "lucide-react";
import { Card, CardContent } from "../atoms/card";
import { Badge } from "../atoms/badge";
import { Button } from "../atoms/button";
import { upcomingGamesDummy } from "@/dummy/upcoming-games-for-you";
import dayjs from "dayjs";
import { GameCard } from "../molecules/game-card";

const getUpcomingGames = async () => {
	const promise: Promise<void> = new Promise((resolve) => setTimeout(resolve, 1000));
	await promise;
	return upcomingGamesDummy.sort((a, b) => {
		const dateA = dayjs(a.dateTime).valueOf();
		const dateB = dayjs(b.dateTime).valueOf();
		return dateA - dateB;
	});
};

export const UpcomingGames = async () => {
	const upcomingGames = await getUpcomingGames();
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{upcomingGames.map((g) => (
				<GameCard game={g} key={g.gameId} attending />
			))}
		</div>
	);
};
