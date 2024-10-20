'use client'
import { deletePlayer } from "../lib/actions/player";
import { PlayerType } from "../lib/types";
// Component
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import getPlayerIcon from "./playerIcon";

type props = {
    player: PlayerType;
    managementMode: boolean;
}

export default function PlayerCard({ player, managementMode }: props) {

    const playerIcon = getPlayerIcon(player.position)

    return (
        <div className="relative">
            <Link
                href={`/players/${player.playerId}`} 
                className="w-32 h-32 border-2 rounded-lg border-slate-500 p-2 shadow-lg flex flex-col justify-between">
                <span className="text-lg">
                    {player.derbyName}
                </span>
                <div>
                    <span className="text-sm">{player.surname}</span>
                    <div className="flex justify-between">
                        <span>{player.playerId}</span>
                        <span>{playerIcon}</span>
                    </div>
                </div>
            </Link>
            {managementMode && (
                <button
                    onClick={()=> deletePlayer(player.playerId)}
                    className="absolute right-[-10px] top-[-10px] w-7 border-2 rounded-lg border-lg border-slate-500 text-white bg-slate-500"
                >
                    <XMarkIcon />
                </button>
            )}
        </div>
    )
} 