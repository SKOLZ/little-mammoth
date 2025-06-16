import { useRef, useState } from "react";
import { ZodSchema } from "zod";

type Inputs = Record<string, unknown>;
type Errors<T> = Partial<Record<keyof T, string>>;
type Options<T> = { success: (inputs: T) => void };

export const useForm = <T extends Inputs>(
  schema: ZodSchema<T>,
  options: Options<T>
) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState<Partial<T>>({});
  const [errors, setErrors] = useState<Errors<T>>({});
  const [isValid, setIsValid] = useState(false);
  const [hasFirstSubmit, setHasFirstSubmit] = useState(false);

  const validate = () => {
    setHasFirstSubmit(true);
    const formData = new FormData(formRef.current!);
    const rawData = Object.fromEntries(formData);
    const result = schema.safeParse(rawData);

    if (!result.success) {
      const newErrors = result.error.issues.reduce((acc, issue) => {
        const key = issue.path[0] as keyof T;
        acc[key] = issue.message;
        return acc;
      }, {} as Errors<T>);

      setErrors(newErrors);
      setIsValid(false);
      return { errors: newErrors };
    }

    setInputs(result.data);
    setErrors({});
    setIsValid(true);
    return { inputs: result.data };
  };

  const success = () => {
    const result = validate();
    if (!result.inputs) return;

    options.success(result.inputs);
  };

  const reset = () => {
    formRef.current?.reset();
    setInputs({});
    setErrors({});
    setIsValid(false);
    setHasFirstSubmit(false);
  };

  const update = () => {
    if (!hasFirstSubmit) return;
    validate();
  };

  return {
    ref: formRef,
    inputs,
    errors,
    isValid,
    update,
    success,
    reset,
  };
};
