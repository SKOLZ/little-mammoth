import cn from "classnames";
import styles from "./styles.module.scss";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
