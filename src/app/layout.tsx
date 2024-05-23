import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/molecules/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/atoms/sonner";
import { Sidebar } from "@/components/molecules/sidebar";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "fff",
	description: "fff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)} style={{ display: "grid", gridTemplateRows: "5% 95%" }}>
					<Header />
					<main className="flex h-full">
						<Sidebar />
						<div className="flex-1">{children}</div>
					</main>
					<Toaster closeButton />
				</body>
			</html>
		</ClerkProvider>
	);
}
