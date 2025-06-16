import inputStyles from "../styles.module.scss";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  groupClassName?: string;
}

export const TextField: React.FC<InputProps> = ({
  label,
  error,
  className,
  groupClassName,
  id,
  ...props
}) => {
  return (
    <div className={cn(inputStyles.inputGroup, groupClassName)}>
      <label className={inputStyles.label} htmlFor={id}>
        {label}
      </label>
      <div className={inputStyles.inputWrapper}>
        <input
          id={id}
          className={cn(inputStyles.input, className)}
          {...props}
        />
        {error && (
          <p className={cn(inputStyles.inputError, "text-3 error-500")}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
