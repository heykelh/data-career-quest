import { StarterRole } from "@/types/role";
export const starterRoles: StarterRole[] = [
{
id: "data-analyst",
name: "Data Analyst",
tagline: "Turn raw data into insight.",
description: "You excel at KPIs, dashboards, segmentation and business storytelling.",
bonuses: { sql: 2, analytics: 2, business: 1, communication: 1 },
starterZones: ["data-village", "sql-mines", "dashboard-city"],
strengths: ["SQL", "BI", "KPI", "Storytelling"],
},
{
id: "data-engineer",
name: "Data Engineer",
tagline: "Build reliable data foundations.",
description: "You design pipelines, warehouses and trustworthy data systems.",
bonuses: { dataEngineering: 2, architecture: 2, governance: 1, python:
1 },
starterZones: ["data-village", "pipeline-factory", "sql-mines"],
strengths: ["ETL", "Warehousing", "Observability", "Python"],
},
{
id: "data-scientist",
name: "Data Scientist",
tagline: "Model, predict and optimize.",
description: "You bring advanced analytics, ML and experimentation into the game.",
bonuses: { machineLearning: 2, analytics: 1, python: 2, innovation: 1 },
starterZones: ["data-village", "ai-lab", "python-port"],
strengths: ["ML", "Statistics", "Python", "Evaluation"],
},
{
id: "data-consultant",
name: "Data Consultant",
tagline: "Solve business problems with data.",
description: "You align governance, strategy, adoption and stakeholder value.",
bonuses: { communication: 2, business: 2, governance: 1, compliance: 1 },
starterZones: ["data-village", "governance-hall", "strategy-tower"],
strengths: ["Roadmap", "Governance", "Stakeholders", "Transformation"],
},
];