export const teamOptions = [
  "DATA OFFICE",
  "CODEXIS",
  "DATIFY",
  "MDSO",
  "CRM",
  "HR",
  "ITS",
  "GRAFIK",
] as const;

export type Team = (typeof teamOptions)[number];

export type ScoreData = {
  name: string;
  score: number;
  fingers?: number;
  team?: Team;
};

export const scores: ScoreData[] = [
  { name: "Vojtěch Kosa", team: "DATA OFFICE", score: 121, fingers: 8 },
  { name: "Christian Krutsche", team: "DATIFY", score: 95, fingers: 8 },
  { name: "Maroš Mečiar", team: "DATA OFFICE", score: 83, fingers: 3 },
  { name: "Tomáš Řehák", team: "CODEXIS", score: 62 },
  { name: "Marek Svatoš", team: "DATIFY", score: 92 },
  { name: "Josef Swaczyna", team: "DATA OFFICE", score: 37, fingers: 7 },
  { name: "Jiří Herold", team: "DATA OFFICE", score: 48, fingers: 5 },
  { name: "Dan Stržínek", team: "CRM", score: 32, fingers: 3 },
  { name: "Jiří Krokviak", team: "CODEXIS", score: 92, fingers: 20 },
  { name: "Silvie Staníková", team: "CODEXIS", score: 32, fingers: 8 },
  { name: "Jiří Kadlčík", team: "MDSO", score: 56 },
  { name: "Tomáš Věnsek", team: "CRM", score: 59 },
  { name: "Zdeněk Růžička", team: "CRM", score: 26 },
  { name: "Patrik Szewczyk", team: "DATIFY", score: 60 },
  { name: "Jan Řehák", team: "HR", score: 93, fingers: 8 },
  { name: "Martin Rešovský", team: "DATIFY", score: 78, fingers: 9 },
  { name: "Patrik Hříva", team: "ITS", score: 54, fingers: 8 },
  { name: "Viktor Horáček", team: "MDSO", score: 75, fingers: 8 },
  { name: "Jakub Ehrenberger", team: "GRAFIK", score: 71, fingers: 10 },
  { name: "Anna Řeháková", team: "HR", score: 42, fingers: 8 },
  { name: "Marek Moravec", team: "DATA OFFICE", score: 76, fingers: 10 }
];
