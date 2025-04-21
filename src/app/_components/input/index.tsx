import styles from "./styles.module.scss";
import cn from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  groupClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  className,
  groupClassName,
  id,
  ...props
}) => {
  return (
    <div className={cn(styles.inputGroup, groupClassName)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={cn(styles.input, className)} {...props} />
    </div>
  );
};
