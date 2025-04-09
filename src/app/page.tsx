import { getTripRecommendations } from "@/services/tripRecommendations";
import { Logo } from "./_components/logo";
import styles from "./styles.module.scss";
import { RecommendTripsForm } from "./_components/recommendTripsForm";
import { RecommendedTrips } from "./_components/recommendedTrips";
import { Trip } from "@/types/trip";

export default async function Home() {
  const tripRecommendations = await getTripRecommendations<Trip[]>({
    constraints: {
      weight: 123,
      budget: 123,
    },
    resource: {
      type: "HIDE",
      tier: "4",
      rarity: "1",
    },
  });

  return (
    <section className={`section ${styles.mainSection}`}>
      <Logo typeLogo="full" />
      <RecommendTripsForm />
      <RecommendedTrips trips={tripRecommendations} />
    </section>
  );
}
