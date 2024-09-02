import { forwardRef, InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: React.ComponentProps<"label">["className"];
  labelClassName?: React.ComponentProps<"span">["className"];
  disabled?: boolean;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, labelClassName, containerClassName, disabled, ...inputProps }, ref) => {
    return (
      <label
        className={cn(
          "relative flex items-center justify-center md:justify-start md:mr-16 mt-3 p-2 text-xl cursor-pointer",
          containerClassName,
        )}
      >
        <input
          type="checkbox"
          className="absolute w-full h-full peer appearance-none rounded-full
            cursor-pointer"
          {...inputProps}
          ref={ref}
          disabled={disabled}
        />
        <span
          className={cn(
            `w-9 h-5 relative flex items-center flex-shrink-0 ml-2 p-1 bg-gray-500 border border-solid
            border-gary-500 rounded-full duration-300 ease-in-out peer-checked:bg-green-500 after:absolute
            after:top-0.5 after:left-0.5 after:content-[''] after:size-3.5 after:bg-white after:rounded-full 
            after:duration-300 peer-checked:after:translate-x-4 peer-checked:after:bg-white`,
            {
              "opacity-40": disabled,
            },
          )}
        />
        <span className={cn("text-base pt-1", labelClassName)}>{label}</span>
      </label>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
