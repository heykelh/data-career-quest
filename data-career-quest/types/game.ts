import { StarterRoleId } from "./role";
import { PlayerStats } from "./stats";
export interface PlayerState {
userId?: string;
starterRole?: StarterRoleId;
currentJob: string;
xp: number;
level: number;
reputation: number;
completedMissions: string[];
unlockedZones: string[];
unlockedMissions: string[];
unlockedBadges: string[];
stats: PlayerStats;
}