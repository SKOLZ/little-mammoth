"use server";

export default async function recommendTripsSubmitAction(
  prev: unknown,
  formData: FormData
) {
  try {
    console.log(JSON.stringify(formData));
  } catch (e) {
    throw e;
  }
}
