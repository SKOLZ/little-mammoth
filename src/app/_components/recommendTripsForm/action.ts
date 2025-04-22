"use server";

import {
  getTripRecommendations,
  TripRecommendationBody,
} from "@/services/tripRecommendations";

const parseFormData = (formData: FormData): TripRecommendationBody => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};

  formData.forEach((value, key) => {
    if (key.includes("$ACTION")) return;

    const keyPath = key.split(".");
    let current = result;

    keyPath.forEach((segment, index) => {
      if (index === keyPath.length - 1) {
        // Convert to number if the field should be numeric
        const isNumeric = ["weight", "budget"].includes(segment);
        current[segment] = isNumeric ? Number(value) : value;
      } else {
        current[segment] = current[segment] || {};
        current = current[segment];
      }
    });
  });

  return result;
};

export default async function recommendTripsSubmitAction(
  prev: unknown,
  formData: FormData
) {
  try {
    const values = parseFormData(formData);
    const recommendations = await getTripRecommendations(values);
    return recommendations;
  } catch (e) {
    throw e;
  }
}
