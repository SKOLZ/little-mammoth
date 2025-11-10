import { preprocess, z } from "zod";

export const recommendTripsFormSchema = z.object({
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
