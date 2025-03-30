import { getTripRecommendations } from "@/services/tripRecommendations";
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
    <div className={styles.fooBar}>{JSON.stringify(tripRecommendations)}</div>
  );
}
