import { Trip } from "@/types/trip";
import { RecommendedTrip } from "./_components/recommendedTrip";
import styles from "./styles.module.scss";
import cn from "classnames";

interface Props {
  trips: Array<Trip>;
}

export const RecommendedTrips: React.FC<Props> = ({ trips }) => {
  return (
    <section className={cn(styles.recommendedTrips)}>
      {trips.map((trip, index) => (
        <RecommendedTrip trip={trip} key={index} position={index + 1} />
      ))}
    </section>
  );
};
