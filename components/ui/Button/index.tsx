import { cn } from "@/utils/cn";

const Button = ({
  label,
  className,
  type = "button",
  ...rest
}: React.ComponentProps<"button"> & { label: string }) => {
  return (
    <button
      type={type}
      className={cn("flex items-center justify-center  px-2 py-1 rounded-3xl w-full ", className)}
      {...rest}
    >
      <p>{label}</p>
    </button>
  );
};

export default Button;
