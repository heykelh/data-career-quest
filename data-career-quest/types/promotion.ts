import { PlayerStats } from "./stats";
export interface Promotion {
id: string;
name: string;
tier: 1 | 2 | 3 | 4 | 5;
description: string;
requirements: Partial<PlayerStats> & {
xp?: number;
completedMissions?: number;
};
}