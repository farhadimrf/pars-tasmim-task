import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: React.ComponentProps<"label">["className"];
  labelClassName?: React.ComponentProps<"span">["className"];
  disabled?: boolean;
  description?: string;
  error?: boolean;
  errorText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelClassName,
      containerClassName,
      type = "text",
      disabled,
      error,
      errorText,
      description,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <label className={cn("flex w-full flex-col items-start p-2", containerClassName)}>
        <span className={cn("text-sm pb-1 ps-1 text-secondary-text-color", labelClassName)}>
          {label}
        </span>
        <input
          type={type}
          {...inputProps}
          ref={ref}
          disabled={disabled}
          className={cn(
            "border border-solid w-full placeholder:text-secondary-text-color rounded-full border-gray-300 bg-black/10 focus:outline-none p-3 text-base h-fit",
            { "opacity-40": disabled },
          )}
        />
        {description && (
          <span className="text-sm w-full text-center pt-2 text-secondary-text-color ">
            {description}
          </span>
        )}
        {error && <span className="text-sm ps-3 pt-1 text-red-500">{errorText}</span>}
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
