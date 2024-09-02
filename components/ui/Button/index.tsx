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
      className={cn(
        "flex items-center justify-center bg-primary-color px-2 font-bold py-2 rounded-3xl w-full ",
        className,
      )}
      {...rest}
    >
      <p>{label}</p>
    </button>
  );
};

export default Button;
