import { getTripRecommendations } from "@/services/tripRecommendations";
import { Logo } from "./_components/logo";
import styles from "./styles.module.scss";

export default async function Home() {
  const tripRecommendations = await getTripRecommendations({
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
      <div>{JSON.stringify(tripRecommendations)}</div>
    </section>
  );
}
