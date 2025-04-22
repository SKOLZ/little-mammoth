import { formOptions } from "@tanstack/react-form/nextjs";

export const formOpts = formOptions({
  defaultValues: {
    constraints: {
      weight: 0,
      budget: 0,
    },
    resource: {
      type: "",
      tier: "",
      rarity: "",
    },
  },
});
