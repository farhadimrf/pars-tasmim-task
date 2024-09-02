import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, className, disabled, ...inputProps }, ref) => {
    return (
      <label
        className={cn(
          "w-full flex cursor-pointer items-center justify-center rounded-full",
          className,
          {
            "opacity-50": disabled,
          },
        )}
      >
        <input type="radio" disabled={disabled} {...inputProps} ref={ref} className="hidden" />
        {label}
      </label>
    );
  },
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
