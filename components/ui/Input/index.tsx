import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: React.ComponentProps<"label">["className"];
  labelClassName?: React.ComponentProps<"span">["className"];
  disabled?: boolean;
  description?: string;
  error?: boolean;
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
            { "opacity-40": disabled, "border-red-500": error },
          )}
        />
        {description && (
          <span
            className={cn("text-sm w-full text-center py-1 mt-1 text-secondary-text-color ", {
              "bg-red-100 border border-red-500 text-red-600 rounded-full": error,
            })}
          >
            {description}
          </span>
        )}
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
