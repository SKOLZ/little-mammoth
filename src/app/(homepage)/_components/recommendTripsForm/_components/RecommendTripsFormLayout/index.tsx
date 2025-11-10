import { RecommendTripsFormParams } from "@/types/RecommendTripsFormParams";
import cn from "classnames";
import Form from "next/form";
import { Button } from "@/app/_components/button";
import { TextField } from "@/app/_components/inputs/textField";
import { Select } from "@/app/_components/inputs/select";
import styles from "./styles.module.scss";


interface Props {
  isDisabled?: boolean;
  initialValues?: RecommendTripsFormParams
  errors?: {
    weight?: string[];
    budget?: string[];
    type?: string[];
    tier?: string[];
    rarity?: string[];
  };
}

export const RecommendTripsFormLayout: React.FC<Props> = ({initialValues, isDisabled, errors}) => {
  return (
    <Form action="/" className={styles.recommendTripsForm}>
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
              defaultValue={initialValues?.weight}
              error={errors?.weight?.[0]}
              id="weight"
              disabled={isDisabled}
            />
            <TextField
              type="number"
              label="Budget"
              groupClassName={styles.field}
              name="budget"
              defaultValue={initialValues?.budget}
              error={errors?.budget?.[0]}
              id="budget"
              disabled={isDisabled}
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
              id="type"
              items={[
                {
                  value: "FIBER",
                  label: "Fiber",
                  imagePath: "/assets/selectIcons/fiber_icon.png",
                },
                {
                  value: "HIDE",
                  label: "Hide",
                  imagePath: "/assets/selectIcons/hide_icon.png",
                },
                {
                  value: "ORE",
                  label: "Ore",
                  imagePath: "/assets/selectIcons/ore_icon.png",
                },
                {
                  value: "ROCK",
                  label: "Rock",
                  imagePath: "/assets/selectIcons/rock_icon.png",
                },
                {
                  value: "WOOD",
                  label: "Wood",
                  imagePath: "/assets/selectIcons/log_icon.png",
                },
              ]}
              defaultValue={initialValues?.type}
              error={errors?.type?.[0]}
              disabled={isDisabled}
            />
            <Select
              name="tier"
              label="Tier"
              groupClassName={styles.field}
              id="tier"
              items={[
                {
                  value: "4",
                  label: "Tier 4",
                  imagePath: "/assets/selectIcons/tier_IV_icon.png",
                },
                {
                  value: "5",
                  label: "Tier 5",
                  imagePath: "/assets/selectIcons/tier_V_icon.png",
                },
                {
                  value: "6",
                  label: "Tier 6",
                  imagePath: "/assets/selectIcons/tier_VI_icon.png",
                },
                {
                  value: "7",
                  label: "Tier 7",
                  imagePath: "/assets/selectIcons/tier_VII_icon.png",
                },
                {
                  value: "8",
                  label: "Tier 8",
                  imagePath: "/assets/selectIcons/tier_VIII_icon.png",
                },
              ]}
              defaultValue={initialValues?.tier}
              error={errors?.tier?.[0]}
              disabled={isDisabled}
            />
            <Select
              name="rarity"
              label="Rarity"
              id="rarity"
              groupClassName={styles.field}
              items={[
                {
                  value: "0",
                  label: "Common",
                  imagePath: "/assets/selectIcons/common_icon.png",
                },
                {
                  value: "1",
                  label: "Uncommon",
                  imagePath: "/assets/selectIcons/uncommon_icon.png",
                },
                {
                  value: "2",
                  label: "Rare",
                  imagePath: "/assets/selectIcons/rare_icon.png",
                },
                {
                  value: "3",
                  label: "Epic",
                  imagePath: "/assets/selectIcons/epic_icon.png",
                },
                {
                  value: "4",
                  label: "Legendary",
                  imagePath: "/assets/selectIcons/legendary_icon.png",
                },
              ]}
              defaultValue={initialValues?.rarity}
              error={errors?.rarity?.[0]}
              disabled={isDisabled}
            />
          </div>
        </fieldset>
      </div>
      <Button type="submit">Make it fly!</Button>
    </Form>
  );
} 
