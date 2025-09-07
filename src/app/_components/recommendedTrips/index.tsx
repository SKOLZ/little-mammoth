"use client";

import { RecommendedTrip } from "./_components/recommendedTrip";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Trip } from "@/types/trip";

interface Props {
  trips: Array<Trip>;
}

export const RecommendedTrips: React.FC<Props> = ({ trips }) => {
  if (trips.length === 0) {
    return null;
  }

  return (
    <section className={cn(styles.recommendedTrips)}>
      {trips.map((trip, index) => (
        <RecommendedTrip trip={trip} key={index} position={index + 1} />
      ))}
    </section>
  );
};
