import { PaintBucketIcon, TrophyIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Suspense } from "react";
import { Skeleton } from "../atoms/skeleton";

export const Header = async () => {
	return (
		<header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white md:px-6">
			<div className="flex items-center gap-2">
				<TrophyIcon className="h-6 w-6" />
				<span className="text-lg font-semibold">fff</span>
			</div>
			<PaintBucketIcon className="h-6 w-6" />
		</header>
	);
};
