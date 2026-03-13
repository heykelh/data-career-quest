import { PlayerStats } from "./stats";
export type MissionType = "quiz" | "scenario" | "compliance" | "debug";
export interface Question {
id: string;
category: string;
difficulty: 1 | 2 | 3;
prompt: string;
choices: string[];
answerIndex: number;
explanation: string;
statRewards?: Partial<PlayerStats>;
xpReward?: number;
}
export interface Mission {
id: string;
zoneId: string;
title: string;
description: string;
client: string;
type: MissionType;
difficulty: 1 | 2 | 3;
questionIds: string[];
rewards: {
xp: number;
stats: Partial<PlayerStats>;
};
unlocks?: {
zones?: string[];
missions?: string[];
badges?: string[];
};
}
