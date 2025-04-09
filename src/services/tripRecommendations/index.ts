"use server";

import { apiFetch } from "../apiClient";

export type TripRecommendationBody = {
  constraints: {
    weight: number;
    budget: number;
  };
  resource: {
    type: "HIDE" | "FIBER" | "ORE" | "ROCK" | "WOOD";
    tier: "4" | "5" | "6" | "7" | "8";
    rarity: "0" | "1" | "2" | "3" | "4";
  };
};

export const getTripRecommendations = async <T>(
  body: TripRecommendationBody
): Promise<T> => {
  return await apiFetch("/recommend_trips", {
    method: "POST",
    body: JSON.stringify(body),
  });
};
