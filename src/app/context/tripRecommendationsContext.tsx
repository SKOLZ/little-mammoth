"use client";

import { Trip } from "@/types/trip";
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  Dispatch,
} from "react";

type TripRecommendationsContextType = {
  trips: Trip[];
  setTrips: Dispatch<React.SetStateAction<Trip[]>>;
};

const TripRecommendationsContext =
  createContext<TripRecommendationsContextType | null>(null);

export const TripRecommendationsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const value = { trips, setTrips };

  return (
    <TripRecommendationsContext.Provider value={value}>
      {children}
    </TripRecommendationsContext.Provider>
  );
};

export const useTripRecommendationsContext = () => {
  const context = useContext(TripRecommendationsContext);
  if (!context) {
    throw new Error(
      "useTripRecommendations must be used within a TripRecommendationsProvider"
    );
  }
  return context;
};
