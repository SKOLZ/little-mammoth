"use client";

import { Button } from "../button";
import { TextField } from "../inputs/textField";
import { preprocess, z } from "zod";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useForm } from "@/app/_hooks/useForm";
import { getTripRecommendations } from "@/services/tripRecommendations";
import { Trip } from "@/types/trip";
import { useTripRecommendationsContext } from "@/app/context/tripRecommendationsContext";
import { Select } from "../inputs/select";

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

export const RecommendTripsForm: React.FC = () => {
  const { setTrips } = useTripRecommendationsContext();
  const { ref, update, success, errors } = useForm(schema, {
    success: async ({ weight, budget, type, tier, rarity }) => {
      const response = await getTripRecommendations<Trip[]>({
        constraints: {
          weight: weight as number,
          budget: budget as number,
        },
        resource: {
          type: type,
          tier: tier,
          rarity: rarity,
        },
      });
      setTrips(response);
    },
  });

  console.log("errors", JSON.stringify(errors));

  return (
    <form
      ref={ref}
      onChange={update}
      onSubmit={(e) => {
        e.preventDefault();
        success();
      }}
      className={styles.recommendTripsForm}
    >
      <div className={cn("surface-1", styles.recommendTripsFormFields)}>
        <fieldset>
          <legend className={cn(styles.fieldGroupLegend, "title-1 primary")}>
            Constraints
          </legend>
          <div className={styles.fieldGroup}>
            <TextField
              name="weight"
              type="number"
              label="Weight"
              groupClassName={styles.field}
              error={errors.weight}
            />
            <TextField
              type="number"
              label="Budget"
              groupClassName={styles.field}
              name="budget"
              error={errors.budget}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend className={cn(styles.fieldGroupLegend, "title-1 primary")}>
            Resource
          </legend>
          <div className={styles.fieldGroup}>
            <Select
              name="type"
              label="Type"
              groupClassName={styles.field}
              error={errors.type}
              items={[
                { value: "HIDE", label: "Hide" },
                { value: "FIBER", label: "Fiber" },
                { value: "ORE", label: "Ore" },
                { value: "ROCK", label: "Rock" },
                { value: "WOOD", label: "Wood" },
              ]}
            />
            <Select
              name="tier"
              label="Tier"
              groupClassName={styles.field}
              error={errors.tier}
              items={[
                { value: "4", label: "Tier 4" },
                { value: "5", label: "Tier 5" },
                { value: "6", label: "Tier 6" },
                { value: "7", label: "Tier 7" },
                { value: "8", label: "Tier 8" },
              ]}
            />
            <Select
              name="rarity"
              label="Rarity"
              groupClassName={styles.field}
              error={errors.rarity}
              items={[
                { value: "0", label: "Common" },
                { value: "1", label: "Uncommon" },
                { value: "2", label: "Rare" },
                { value: "3", label: "Epic" },
                { value: "4", label: "Legendary" },
              ]}
            />
          </div>
        </fieldset>
      </div>
      <Button type="submit">Make it fly!</Button>
    </form>
  );
};
