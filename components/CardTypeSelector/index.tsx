import { useFormContext } from "react-hook-form";

import Box from "@/components/ui/Box";
import RadioButton from "@/components/ui/RadioButton";
import { cn } from "@/utils/cn";

type CardTypeSelectorProps = {
  className?: React.ComponentProps<"div">["className"];
  disabled: boolean;
};
type CardItemsType = {
  label: string;
  value: "credit" | "permanent";
};
const cardItems: CardItemsType[] = [
  { label: "اعتباری", value: "credit" },
  { label: "دائمی", value: "permanent" },
];

const CardTypeSelector: React.FC<CardTypeSelectorProps> = ({ className, disabled = false }) => {
  const { register, watch } = useFormContext();

  return (
    <div className={cn("flex flex-col gap-3 w-full items-center justify-center", className)}>
      <h6 className="text-sm text-secondary-text-color">نوع سیم کارت</h6>
      <Box className="border max-w-60 flex gap-2 h-10 rounded-3xl">
        {cardItems.map((card) => (
          <RadioButton
            disabled={disabled}
            key={card.value}
            label={card.label}
            {...register("cardType")}
            value={card.value}
            className={cn("text-sm font-bold", {
              "bg-primary-color": watch("cardType") === card.value,
            })}
          />
        ))}
      </Box>
    </div>
  );
};

export default CardTypeSelector;
