import { Card, CardContent } from "../atoms/card";
import { Skeleton } from "../atoms/skeleton";

const ID = Math.random();

export const GhostCard = () => {
	return (
		<Card>
			<CardContent>
				<div className="flex flex-col w-[371px] h-[76px] justify-between">
					<div className="flex justify-between items-center gap-2">
						<Skeleton className="h-4 w-[60%]" />
						<Skeleton className="h-4 w-[20%]" />
					</div>
					<div className="space-y-2 flex justify-between items-center w-full gap-8">
						<div className="w-full flex flex-col gap-1">
							<Skeleton key={`Ghost-${ID}`} className="h-4" />
							<Skeleton key={`Ghost-${ID}`} className="h-4" />
						</div>
						<Skeleton className="h-4 w-[10%]" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export const GhostCardTrio = () => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{[...Array(3)].map((_i) => (
				<GhostCard key={_i} />
			))}
		</div>
	);
};
