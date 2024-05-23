import { GoalIcon, PlusIcon, ShoppingBasketIcon, VibrateIcon } from "lucide-react";
import { CardContent, Card } from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import { gamesNearYouDummy } from "@/dummy/gamesNearYou";
import { formatDateToRelativeDate } from "@/lib/dateUtils";
import { SportIcon } from "@/lib/iconUtils";
import dayjs from "dayjs";
import { toast } from "sonner";
import { JoinButton } from "../molecules/join-button";
import { GameCard } from "../molecules/game-card";

const getGamesNearUser = async () => {
	const promise: Promise<void> = new Promise((resolve) => setTimeout(resolve, 1000));
	await promise;
	return gamesNearYouDummy.sort((a, b) => {
		const dateA = dayjs(a.dateTime).valueOf();
		const dateB = dayjs(b.dateTime).valueOf();
		return dateA - dateB;
	});
};

export const GamesNearYou = async () => {
	const games = await getGamesNearUser();

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{games.map((g) => (
				<GameCard game={g} key={g.gameId} />
			))}
		</div>
	);
};
