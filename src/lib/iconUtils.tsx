import Image from "next/image";
import { ReactNode } from "react";
import footballIcon from "../../public/football.svg";
import basketballIcon from "../../public/basketball.svg";
import tennisIcon from "../../public/tennis.svg";

export function SportIcon({ sport }: { sport: Sports }): ReactNode | null {
	switch (sport) {
		case "Football":
			return <Image className="h-6 w-6" alt="Football Icon" src={footballIcon} />;
		case "Basketball":
			return <Image className="h-6 w-6" alt="Basketball Icon" src={basketballIcon} />;
		case "Tennis":
			return <Image className="h-6 w-6" alt="Tennis Icon" src={tennisIcon} />;
		default:
			return null;
	}
}
