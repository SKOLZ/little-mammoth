import { RecommendTripsFormParams } from "@/types/RecommendTripsFormParams";
import { recommendTripsFormSchema } from "@/schema/recommendTripsFormSchema";
import { RecommendTripsFormLayout } from "./_components/RecommendTripsFormLayout";
interface Props {
  searchParams?: Promise<RecommendTripsFormParams>;
}

export const RecommendTripsForm: React.FC<Props> = async ({
  searchParams,
}) => {
  const params = await searchParams;
  let result, errors, initialValues;
  if (params && Object.keys(params).length !== 0) {
    result = recommendTripsFormSchema.safeParse(params);
    errors = result.error?.formErrors.fieldErrors;
    initialValues = {
      weight: errors?.weight ? undefined : params.weight,
      budget: errors?.budget ? undefined : params.budget,
      type: errors?.type ? undefined : params.type,
      tier: errors?.tier ? undefined : params.tier,
      rarity: errors?.rarity ? undefined : params.rarity,
    }
  }

  return (
    <RecommendTripsFormLayout
      initialValues={initialValues}
      errors={errors}
    />
  );
};
