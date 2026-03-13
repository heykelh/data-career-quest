export interface Badge {
id: string;
name: string;
description: string;
icon: string;
condition: {
stat?: { key: string; value: number };
missionsCompleted?: number;
zoneCompleted?: string;
promotionReached?: string;
};
}