"use client";

import { toast } from "sonner";
import { Button } from "../atoms/button";
import { CheckCircle2Icon, PlusIcon } from "lucide-react";
import { formatDateToRelativeDate } from "@/lib/dateUtils";

export const JoinButton = ({ gameInfo }: { gameInfo: Game }) => {
	return (
		<Button
			size="icon"
			variant="ghost"
			onClick={() =>
				toast("Game added to your calendar", {
					description: formatDateToRelativeDate(gameInfo.dateTime, gameInfo.duration),
					icon: <CheckCircle2Icon className="text-green-400" />,
				})
			}
		>
			<PlusIcon className="h-5 w-5" />
			<span className="sr-only">Join</span>
		</Button>
	);
};
