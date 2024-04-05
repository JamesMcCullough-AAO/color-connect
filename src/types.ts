export type GridBoxPath = {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  color: string;
};

export type Point = { x: number; y: number };
export type ColourPoint = Point & { color: string };
export type SpecialTile = Point & { tileType: string; color?: string };
export type Grid = (string | null)[][];

export enum GameMode {
  standard = "standard",
  classic = "classic",
  endless = "endless",
}

export const levelTimerStart = 20;

export const allStageEffects = [
  "lock",
  "colour-spesific-tiles",
  "direction-spesific-tiles",
  "warp",
  "arrow-tiles",
  "dark",
  "bomb",
  "magic-box",
];

export const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "magenta",
  "lime",
  "pink",
  "teal",
  "lavender",
  "brown",
  "beige",
  "maroon",
  "mint",
  "olive",
  "coral",
  "navy",
];

export const iconColors = {
  red: "white",
  green: "white",
  blue: "white",
  yellow: "black",
  purple: "white",
  orange: "black",
  cyan: "black",
  magenta: "white",
  lime: "black",
  pink: "black",
  teal: "black",
  lavender: "black",
  brown: "white",
  beige: "black",
  maroon: "white",
  mint: "black",
  olive: "black",
  coral: "black",
  navy: "white",
};

export const unlockableStageTypes = [
  {
    level: 5,
    effect: "lock",
    popupText: "Unlock Locks with the Key!",
    color: "yellow",
  },
  {
    level: 10,
    effect: "colour-spesific-tiles",
    popupText: "Chroma-Set Tiles are Here!",
    color: "orange",
  },
  {
    level: 15,
    effect: "direction-spesific-tiles",
    popupText: "Tunnels are Here!",
    color: "blue",
  },
  {
    level: 20,
    effect: "warp",
    popupText: "It's Warp Time!",
    color: "pink",
  },
  {
    level: 25,
    effect: "arrow-tiles",
    popupText: "Arrow Tiles Arrive!",
    color: "green",
  },
  {
    level: 30,
    effect: "dark",
    popupText: "Lights Out!",
    color: "black",
  },
  {
    level: 35,
    effect: "bomb",
    popupText: "Tick Tock!",
    color: "red",
  },
  {
    level: 40,
    effect: "magic-box",
    popupText: "Magic Box!",
    color: "purple",
  },
];
