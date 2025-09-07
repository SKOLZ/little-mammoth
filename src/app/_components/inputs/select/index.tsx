import cn from "classnames";
import inputStyles from "../styles.module.scss";
import NextImage from "next/image";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  items: {
    value: string;
    label: string;
    imagePath?: string;
  }[];
  error?: string;
  groupClassName?: string;
}

export const Select: React.FC<Props> = ({
  label,
  items,
  error,
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
        <select id={id} className={inputStyles.input} {...props}>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.imagePath && (
                <NextImage
                  width={20}
                  height={20}
                  src={item.imagePath}
                  alt={item.label}
                  className={inputStyles.selectIcon}
                />
              )}
              {item.label}
            </option>
          ))}
        </select>
        {error && (
          <p className={cn(inputStyles.inputError, "text-3 error-500")}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
