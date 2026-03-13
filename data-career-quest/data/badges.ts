import { Badge } from "@/types/badge";
export const badges: Badge[] = [
{ id: "sql-apprentice", name: "SQL Apprentice", description: "Reach 5 SQL.", icon: "sql-apprentice.png", condition: { stat: { key: "sql", value:
5 } } },
{ id: "sql-slayer", name: "SQL Slayer", description: "Reach 12 SQL.",
icon: "sql-slayer.png", condition: { stat: { key: "sql", value: 12 } } },
{ id: "dashboard-defender", name: "Dashboard Defender", description:
"Reach 6 Analytics.", icon: "dashboard-defender.png", condition: { stat: {
key: "analytics", value: 6 } } },
{ id: "kpi-whisperer", name: "KPI Whisperer", description: "Reach 10 Analytics.", icon: "kpi-whisperer.png", condition: { stat: { key:
"analytics", value: 10 } } },
{ id: "pipeline-rescuer", name: "Pipeline Rescuer", description: "Reach 6 Data Engineering.", icon: "pipeline-rescuer.png", condition: { stat: { key:
"dataEngineering", value: 6 } } },
{ id: "etl-tamer", name: "ETL Tamer", description: "Complete Pipeline Factory.", icon: "etl-tamer.png", condition: { zoneCompleted: "pipelinefactory" } },
{ id: "warehouse-guardian", name: "Warehouse Guardian", description:
"Reach 10 Architecture.", icon: "warehouse-guardian.png", condition: { stat:
{ key: "architecture", value: 10 } } },
{ id: "governance-guardian", name: "Governance Guardian", description:
"Reach 8 Governance.", icon: "governance-guardian.png", condition: { stat: {
key: "governance", value: 8 } } },
{ id: "metadata-monk", name: "Metadata Monk", description: "Complete Governance Hall.", icon: "metadata-monk.png", condition: { zoneCompleted:
"governance-hall" } },
{ id: "lineage-tracker", name: "Lineage Tracker", description:
"Unlock Data Governance Specialist.", icon: "lineage-tracker.png",
condition: { promotionReached: "data-governance-specialist" } },
{ id: "privacy-protector", name: "Privacy Protector", description:
"Complete Privacy District.", icon: "privacy-protector.png", condition: {
zoneCompleted: "privacy-district" } },
{ id: "gdpr-ranger", name: "GDPR Ranger", description: "Reach 8 Compliance.", icon: "gdpr-ranger.png", condition: { stat: { key:
"compliance", value: 8 } } },
{ id: "ai-risk-sentinel", name: "AI Risk Sentinel", description: "Complete AI Lab.", icon: "ai-risk-sentinel.png", condition: { zoneCompleted: "ailab" } },
{ id: "bias-buster", name: "Bias Buster", description: "Reach 10 Machine Learning.", icon: "bias-buster.png", condition: { stat: { key:
"machineLearning", value: 10 } } },
{ id: "python-automator", name: "Python Automator", description: "Reach 8 Python.", icon: "python-automator.png", condition: { stat: { key: "python",
value: 8 } } },
{ id: "data-storyteller", name: "Data Storyteller", description: "Reach 8 Communication.", icon: "data-storyteller.png", condition: { stat: { key:
"communication", value: 8 } } },
{ id: "strategy-whisperer", name: "Strategy Whisperer", description:
"Complete Strategy Tower.", icon: "strategy-whisperer.png", condition: {
zoneCompleted: "strategy-tower" } },
{ id: "boardroom-ready", name: "Boardroom Ready", description: "Reach 10 Business.", icon: "boardroom-ready.png", condition: { stat: { key:
"business", value: 10 } } },
{ id: "future-architect", name: "Future Architect", description: "Unlock Data Architect.", icon: "future-architect.png", condition: {
promotionReached: "data-architect" } },
{ id: "ai-engineer-unlocked", name: "AI Engineer Unlocked", description:
"Unlock AI Engineer.", icon: "ai-engineer-unlocked.png", condition: {
promotionReached: "ai-engineer" } },
{ id: "data-product-mindset", name: "Data Product Mindset", description:
"Unlock Data Product Manager.", icon: "data-product-mindset.png", condition:
{ promotionReached: "data-product-manager" } },
{ id: "consultant-approved", name: "Consultant Approved", description:
"Unlock Lead Data Consultant.", icon: "consultant-approved.png", condition:
{ promotionReached: "lead-data-consultant" } },
{ id: "trust-by-design", name: "Trust by Design", description: "Reach 10 Governance and 8 Compliance.", icon: "trust-by-design.png", condition: {
stat: { key: "governance", value: 10 } } },
{ id: "quality-champion", name: "Quality Champion", description: "Complete 12 missions.", icon: "quality-champion.png", condition: { missionsCompleted:
12 } },
{ id: "compliance-keeper", name: "Compliance Keeper", description:
"Complete 20 missions.", icon: "compliance-keeper.png", condition: {
missionsCompleted: 20 } },
];
