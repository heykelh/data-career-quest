export type StatKey =
| "sql"
| "analytics"
| "dataEngineering"
| "machineLearning"
| "governance"
| "compliance"
| "business"
| "communication"
| "architecture"
| "innovation"
| "python";
export type PlayerStats = Record<StatKey, number>;
