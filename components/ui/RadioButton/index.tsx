import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, className, ...inputProps }, ref) => {
    return (
      <label
        className={cn(
          "w-full flex cursor-pointer items-center justify-center rounded-full",
          className,
        )}
      >
        <input type="radio" {...inputProps} ref={ref} className="hidden" />
        {label}
      </label>
    );
  },
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
