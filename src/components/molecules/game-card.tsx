import { SportIcon } from "@/lib/iconUtils";
import { Card, CardContent } from "../atoms/card";
import { Badge } from "../atoms/badge";
import { formatDateToRelativeDate } from "@/lib/dateUtils";
import { JoinButton } from "./join-button";

export const GameCard = ({ game, attending = false }: { game: Game; attending?: boolean }) => {
	return (
		<Card key={game.gameId}>
			<CardContent>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<SportIcon sport={game.sport} />
						<span className="text-lg font-medium">{game.name}</span>
					</div>
					<Badge>
						{game.currPlayers.length}/{game.maxPlayers}
					</Badge>
				</div>
				<div className="mt-2 flex items-center justify-between">
					<div>
						<p className="text-sm text-gray-500 dark:text-gray-400">{game.addr1}</p>
						<p className="text-sm text-gray-500 dark:text-gray-400">{formatDateToRelativeDate(game.dateTime, game.duration)}</p>
					</div>
					{attending ? <Badge variant="secondary">Attending</Badge> : game.currPlayers.length < game.maxPlayers && <JoinButton gameInfo={game} />}
				</div>
			</CardContent>
		</Card>
	);
};
