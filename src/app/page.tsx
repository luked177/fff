import { GamesNearYou } from "@/components/organisms/games-near-you";
import { GameScheduler } from "@/components/organisms/schedule-game";
import { UpcomingGames } from "@/components/organisms/upcoming-games";
import { GhostCardTrio } from "@/components/molecules/ghost-card";
import { Suspense } from "react";

export default function Home() {
	return (
		<div className="flex flex-col gap-8 p-4 md:p-8 lg:p-12">
			<div className="grid grid-cols-2 grid-rows-1">
				<h1 className="text-3xl font-bold">Dashboard</h1>
				<GameScheduler />
			</div>
			<section>
				<h2 className="mb-4 text-2xl font-bold">Potential Games Near You</h2>
				<Suspense fallback={<GhostCardTrio />}>
					<GamesNearYou />
				</Suspense>
			</section>
			<section>
				<h2 className="mb-4 text-2xl font-bold">Upcoming Games (For You)</h2>
				<Suspense fallback={<GhostCardTrio />}>
					<UpcomingGames />
				</Suspense>
			</section>
		</div>
	);
}
