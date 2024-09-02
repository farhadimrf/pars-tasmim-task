import { useFormContext } from "react-hook-form";

import Box from "@/components/ui/Box";
import RadioButton from "@/components/ui/RadioButton";
import { cn } from "@/utils/cn";

type CardTypeSelectorProps = {
  className?: React.ComponentProps<"div">["className"];
};
type CardItemsType = {
  label: string;
  value: "credit" | "permanent";
};
const cardItems: CardItemsType[] = [
  { label: "اعتباری", value: "credit" },
  { label: "دائمی", value: "permanent" },
];

const CardTypeSelector: React.FC<CardTypeSelectorProps> = ({ className }) => {
  const { register, watch } = useFormContext();

  return (
    <div className={cn("flex flex-col gap-2 items-center justify-center", className)}>
      <h6>نوع سیم کارت</h6>
      <Box className="border  flex gap-2 w-60 rounded-3xl">
        {cardItems.map((card) => (
          <RadioButton
            key={card.value}
            label={card.label}
            {...register("cardType")}
            value={card.value}
            className={watch("cardType") === card.value ? "bg-primary-color" : ""}
          />
        ))}
      </Box>
    </div>
  );
};

export default CardTypeSelector;
