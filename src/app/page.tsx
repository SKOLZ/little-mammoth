import { Logo } from "./_components/logo";
import styles from "./styles.module.scss";
import { RecommendTripsForm } from "./_components/recommendTripsForm";
import { RecommendedTrips } from "./_components/recommendedTrips";
import { preprocess, z } from "zod";
import { getTripRecommendations } from "@/services/tripRecommendations";
import { Trip } from "@/types/trip";

const schema = z.object({
  weight: preprocess((val) => {
    if (typeof val !== "string" || val === "") {
      return undefined;
    }
    return parseInt(val);
  }, z.coerce.number({ errorMap: () => ({ message: "Weight is required" }) }).min(0, { message: "Weight cannot be negative" })),
  budget: preprocess((val) => {
    if (typeof val !== "string" || val === "") {
      return undefined;
    }
    return parseInt(val);
  }, z.coerce.number({ errorMap: () => ({ message: "Budget is required" }) }).min(0, { message: "Budget cannot be negative" })),
  type: z.enum(["HIDE", "FIBER", "ORE", "ROCK", "WOOD"], {
    errorMap: () => ({ message: "Select at least one type" }),
  }),
  tier: z.enum(["4", "5", "6", "7", "8"], {
    errorMap: () => ({ message: "Select at least one tier" }),
  }),
  rarity: z.enum(["0", "1", "2", "3", "4"], {
    errorMap: () => ({ message: "Select at least one rarity" }),
  }),
});

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    weight?: string;
    budget?: string;
    type?: "HIDE" | "FIBER" | "ORE" | "ROCK" | "WOOD";
    tier?: "4" | "5" | "6" | "7" | "8";
    rarity?: "0" | "1" | "2" | "3" | "4";
  }>;
}) {
  const params = await searchParams;
  let result, errors;
  if (Object.keys(params).length !== 0) {
    result = schema.safeParse(params);
    errors = result.error?.formErrors.fieldErrors;
  }
  let trips: Array<Trip> = [];
  if (result?.success) {
    trips = await getTripRecommendations<Trip[]>({
      constraints: {
        weight: parseInt(params.weight!),
        budget: parseInt(params.budget!),
      },
      resource: {
        type: params.type!,
        tier: params.tier!,
        rarity: params.rarity!,
      },
    });
  }
  return (
    <section className={`section ${styles.mainSection}`}>
      <Logo typeLogo="full" />
      <RecommendTripsForm initialValues={params} errors={errors} />
      <RecommendedTrips trips={trips} />
    </section>
  );
}
