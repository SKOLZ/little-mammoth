/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  createFormHook,
  createFormHookContexts,
  useTransform,
} from "@tanstack/react-form";
import { Button } from "../button";
import { Input } from "../input";
import { z } from "zod";
import cn from "classnames";
import styles from "./styles.module.scss";
import recommendTripsSubmitAction from "./action";
import { useActionState } from "react";
import { formOpts } from "./formOptions";
import { initialFormState, mergeForm } from "@tanstack/react-form/nextjs";

const { fieldContext, formContext } = createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm: useRecommendedTripsForm } = createFormHook({
  fieldComponents: {
    Input,
  },
  formComponents: {
    SubmitButton: Button,
  },
  fieldContext,
  formContext,
});

export const RecommendTripsForm: React.FC = () => {
  const [state, action] = useActionState(
    recommendTripsSubmitAction,
    initialFormState
  );
  const form = useRecommendedTripsForm({
    ...formOpts,
    validators: {
      onChange: z.object({
        constraints: z.object({
          weight: z.number().min(0),
          budget: z.number().min(0),
        }),
        resource: z.object({
          type: z.enum(["HIDE", "FIBER", "ORE", "ROCK", "WOOD"]),
          tier: z.enum(["4", "5", "6", "7", "8"]),
          rarity: z.enum(["0", "1", "2", "3", "4"]),
        }),
      }),
    },
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, state ?? {}),
      [state]
    ),
    onSubmit: ({ value }) => {
      console.log("submit", value);
      // Do something with form data
      alert(JSON.stringify(value, null, 2));
    },
  });

  console.log({ state });
  return (
    <form
      action={action as never}
      method="post" // Ensure the form uses POST
      onSubmit={(e) => {
        // e.preventDefault(); // Prevent default form submission
        form.handleSubmit(); // Use TanStack's form submission handler
      }}
      className={styles.recommendTripsForm}
    >
      <div className={cn("surface-1", styles.recommendTripsFormFields)}>
        <fieldset>
          <legend className="title-1 primary">Constraints</legend>
          <div className={styles.fieldGroup}>
            <form.AppField name="constraints.weight">
              {(field) => (
                <field.Input
                  name={field.name}
                  type="number"
                  label="Weight"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  groupClassName={styles.field}
                />
              )}
            </form.AppField>
            <form.AppField name="constraints.budget">
              {(field) => (
                <field.Input
                  name={field.name}
                  type="number"
                  label="Budget"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  groupClassName={styles.field}
                />
              )}
            </form.AppField>
          </div>
        </fieldset>
        <fieldset>
          <legend className="title-1 primary">Resource</legend>
          <div className={styles.fieldGroup}>
            <form.AppField name="resource.type">
              {(field) => (
                <field.Input
                  name={field.name}
                  type="text"
                  label="Type"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  groupClassName={styles.field}
                />
              )}
            </form.AppField>
            <form.AppField name="resource.tier">
              {(field) => (
                <field.Input
                  name={field.name}
                  type="text"
                  label="Tier"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  groupClassName={styles.field}
                />
              )}
            </form.AppField>
            <form.AppField name="resource.rarity">
              {(field) => (
                <field.Input
                  name={field.name}
                  type="text"
                  label="Rarity"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  groupClassName={styles.field}
                />
              )}
            </form.AppField>
          </div>
        </fieldset>
      </div>
      <form.AppForm>
        <form.SubmitButton type="submit">Make it fly!</form.SubmitButton>
      </form.AppForm>
    </form>
  );
};
