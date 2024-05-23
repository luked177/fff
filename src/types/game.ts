type Sports = "Football" | "Basketball" | "Tennis";

type Game = {
	sport: Sports;
	maxPlayers: number;
	currPlayers: Array<User>;
	dateTime: string;
	duration: number;
	name: string;
	addr1: string;
	addr2: string;
	postcode: string;
	gameId: string;
};
