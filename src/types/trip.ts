export const DESTINATIONS = {
  FORT_STERLING: "FORT_STERLING",
  THETFORD: "THETFORD",
  LYMHURST: "LYMHURST",
  BRIDGEWATCH: "BRIDGEWATCH",
  MARTLOCK: "MARTLOCK",
  CAERLEON: "CAERLEON",
  BRECILIEN: "BRECILIEN",
} as const;

export type Destination = (typeof DESTINATIONS)[keyof typeof DESTINATIONS];

export type Trip = {
  amount: number;
  buy_in: Destination;
  cost: number;
  profit: number;
  refine_in: Destination;
  sell_in: Destination;
};
