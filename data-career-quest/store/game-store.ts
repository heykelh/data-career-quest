import { create } from "zustand";
import { baseStats } from "@/data/stats";
import { PlayerState } from "@/types/game";
import { StarterRoleId } from "@/types/role";
type GameStore = PlayerState & {
startGame: (role: StarterRoleId, bonuses: Partial<PlayerState["stats"]>)
=> void;
completeMission: (missionId: string, rewards: { xp: number; stats:
Partial<PlayerState["stats"]> }) => void;
unlockZone: (zoneId: string) => void;
unlockBadge: (badgeId: string) => void;
setCurrentJob: (job: string) => void;
resetGame: () => void;
};
const initialState: PlayerState = {
currentJob: "Unassigned",
xp: 0,
level: 1,
reputation: 0,
completedMissions: [],
unlockedZones: ["data-village"],
unlockedMissions: ["m-001", "m-002", "m-003"],
unlockedBadges: [],
stats: baseStats,
};
export const useGameStore = create<GameStore>((set) => ({
...initialState,
startGame: (role, bonuses) =>
set(() => ({
...initialState,
starterRole: role,
currentJob: role,
stats: { ...baseStats, ...bonuses },
})),
completeMission: (missionId, rewards) =>
set((state) => ({
xp: state.xp + rewards.xp,
level: Math.floor((state.xp + rewards.xp) / 30) + 1,
completedMissions: Array.from(new Set([...state.completedMissions,
missionId])),
reputation: state.reputation + 2,
stats: {
...state.stats,
sql: state.stats.sql + (rewards.stats.sql ?? 0),
analytics: state.stats.analytics + (rewards.stats.analytics ?? 0),
dataEngineering: state.stats.dataEngineering +
(rewards.stats.dataEngineering ?? 0),
machineLearning: state.stats.machineLearning +
(rewards.stats.machineLearning ?? 0),
governance: state.stats.governance + (rewards.stats.governance ?? 0),
compliance: state.stats.compliance + (rewards.stats.compliance ?? 0),
business: state.stats.business + (rewards.stats.business ?? 0),
communication: state.stats.communication +
(rewards.stats.communication ?? 0),
architecture: state.stats.architecture +
(rewards.stats.architecture ?? 0),
innovation: state.stats.innovation + (rewards.stats.innovation ?? 0),
python: state.stats.python + (rewards.stats.python ?? 0),
},
})),
unlockZone: (zoneId) =>
set((state) => ({ unlockedZones: Array.from(new
Set([...state.unlockedZones, zoneId])) })),
unlockBadge: (badgeId) =>
set((state) => ({ unlockedBadges: Array.from(new
Set([...state.unlockedBadges, badgeId])) })),
setCurrentJob: (job) => set(() => ({ currentJob: job })),
resetGame: () => set(() => initialState),
}));
