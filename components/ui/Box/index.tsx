import { cn } from "@/utils/cn";

type BoxProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};

export default Box;
