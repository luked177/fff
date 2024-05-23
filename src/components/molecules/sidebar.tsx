"use client";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { CalendarIcon, CogIcon, LayoutDashboardIcon, Users2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
	const pathname = usePathname();

	return (
		<nav className="bg-gray-900 text-gray-400 p-4 flex flex-col items-center justify-between flex-shrink-0">
			<div className="space-y-8">
				<Link className="block" href="/">
					<LayoutDashboardIcon className={cn("h-6 w-6 text-gray-400 hover:text-gray-50", pathname === "/" && "text-gray-50")} />
				</Link>
				<Link className="block" href="calendar">
					<CalendarIcon className={cn("h-6 w-6 text-gray-400 hover:text-gray-50", pathname === "/calendar" && "text-gray-50")} />
				</Link>
				<Link className="block" href="players">
					<Users2Icon className={cn("h-6 w-6 text-gray-400 hover:text-gray-50", pathname === "/players" && "text-gray-50")} />
				</Link>
			</div>
			<div className="space-y-8">
				<Link className="block" href="settings">
					<CogIcon className={cn("h-6 w-6 text-gray-400 hover:text-gray-50", pathname === "/settings" && "text-gray-50")} />
				</Link>
				<UserButton />
			</div>
		</nav>
	);
};
