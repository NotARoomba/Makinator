import { HighScoreBlockProps } from "../utils/Types";

export default function HighScoreBlock({name, icon, highscore, gamesPlayed}: HighScoreBlockProps) {
    return (<div className="bg-secondary/50 rounded-lg p-5 pt-3 flex flex-col text-center text-lg font-semibold">
    {icon}
    <p className="text-2xl mx-auto font-bold">{name}</p>
    <div className="flex mx-auto gap-2"><p className="text-secondary">Highscore:</p><p>{highscore}</p></div>
    <div className="flex mx-auto gap-2"><p className="text-secondary">Games Played:</p><p>{gamesPlayed}</p></div>
</div>)
}