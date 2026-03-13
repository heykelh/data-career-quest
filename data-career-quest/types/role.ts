import { PlayerStats } from "./stats";
export type StarterRoleId =
| "data-analyst"
| "data-engineer"
| "data-scientist"
| "data-consultant";
export interface StarterRole {
id: StarterRoleId;
name: string;
tagline: string;
description: string;
bonuses: Partial<PlayerStats>;
starterZones: string[];
strengths: string[];
}