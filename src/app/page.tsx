import { Logo } from "./_components/logo";
import styles from "./styles.module.scss";
import { RecommendTripsForm } from "./_components/recommendTripsForm";
import { RecommendedTrips } from "./_components/recommendedTrips";
import { TripRecommendationsProvider } from "./context/tripRecommendationsContext";

export default function Home() {
  return (
    <section className={`section ${styles.mainSection}`}>
      <Logo typeLogo="full" />
      <TripRecommendationsProvider>
        <RecommendTripsForm />
        <RecommendedTrips />
      </TripRecommendationsProvider>
    </section>
  );
}
