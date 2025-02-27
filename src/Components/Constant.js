export const PlantsInfo = [
  {
    id: 1,
    name: "Snake Plant",
    description:
      "Snake Plant is a low-maintenance plant that can thrive in a variety of lighting.",
    image: "plant1.png",
  },
  {
    id: 2,
    name: "Spider Plant",
    description:
      "Spider Plant is a popular houseplant that is easy to care for and can be .",
    image: "plant2.png",
  },
  {
    id: 3,
    name: "Peace Lily",
    description:
      "Peace Lily is a beautiful plant that can add a touch of elegance to any room.",
    image: "plant4.png",
  },
];
export const ActivityInfo = [
  {
    id: 1,
    name: "Husna Hassan",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=husna",
    day: "2days ago",
  },
  {
    id: 2,
    name: "Tima Hassan",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=tima",
    day: "5days ago",
  },
  {
    id: 3,
    name: "Selma Noor",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=selma",
    day: "3days ago",
  },
  {
    id: 4,
    name: "Faiza Noor",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=faiza",
    day: "4days ago",
  },
  {
    id: 1,
    name: "Husna Hassan",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=husna",
    day: "2days ago",
  },
  {
    id: 4,
    name: "Faiza Noor",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=faiza",
    day: "4days ago",
  },
  {
    id: 1,
    name: "Husna Hassan",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=husna",
    day: "2days ago",
  },
  {
    id: 2,
    name: "Tima Hassan",
    image: "https://api.dicebear.com/8.x/lorelei/svg?seed=tima",
    day: "5days ago",
  },
];

export const Columns = [
  {
    title: "Key",
    dataIndex: "key",
    key: "key",
    children: [
      { title: "Superkunde", value: "Kunde-Superkunde" },
      { title: "Lieber Kunde", value: "Kunde-Lieber Kunde" },
    ],
  },
  { title: "Verwendung", dataIndex: "verwendung", key: "verwendung" },
  {
    title: "Zugehörig",
    dataIndex: "zugehoerig",
    key: "zugehoerig",
    children: [{ title: "Lager Nord", value: "Lager-Lager Nord" }],
  },
  {
    title: "Art",
    dataIndex: "tele_art",
    key: "tele_art",
    children: [
      { title: "Max Mustermann", value: "Mitarbeiter-Max Mustermann" },
    ],
  },
];

export const treeData = [
  {
    title: "Kunde",
    value: "Kunde",
    children: [
      { title: "Superkunde", value: "Kunde-Superkunde" },
      { title: "Lieber Kunde", value: "Kunde-Lieber Kunde" },
    ],
  },
  {
    title: "Lager",
    value: "Lager",
    children: [{ title: "Lager Nord", value: "Lager-Lager Nord" }],
  },
  {
    title: "Mitarbeiter",
    value: "Mitarbeiter",
    children: [
      { title: "Max Mustermann", value: "Mitarbeiter-Max Mustermann" },
    ],
  },
];

export const data = [
  {
    key: 1,
    verwendung: "Kunde",
    zugehoerig: "Superkunde",
    tele_art: "Telefon",
  },
  {
    key: 2,
    verwendung: "Kunde",
    zugehoerig: "Lieber Kunde",
    tele_art: "Telefon",
  },
  { key: 3, verwendung: "Lager", zugehoerig: "Lager Nord", tele_art: "Fax" },
  {
    key: 4,
    verwendung: "Mitarbeiter",
    zugehoerig: "Max Mustermann",
    tele_art: "Handy",
  },
];
