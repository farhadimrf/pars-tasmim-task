import Box from "@/components/ui/Box";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

type CardTypeSelectorProps = {
  className?: React.ComponentProps<"div">["className"];
  cardType: "credit" | "permanent";
  onSelectedCard: (_value: "credit" | "permanent") => void;
};
type CardItemsType = {
  label: string;
  value: "credit" | "permanent";
};
const cardItems: CardItemsType[] = [
  { label: "اعتباری", value: "credit" },
  { label: "دائمی", value: "permanent" },
];

const CardTypeSelector: React.FC<CardTypeSelectorProps> = ({
  className,
  cardType,
  onSelectedCard,
}) => {
  const handleSelectedCardType = (value: "credit" | "permanent") => {
    onSelectedCard(value);
    console.log("card", cardType);
  };

  return (
    <div className={cn("flex flex-col gap-2 items-center justify-center", className)}>
      <h1>خرید آنلاین شارژ ایرانسل</h1>
      <h6>نوع سیم کارت</h6>
      <Box className="border  flex gap-2 w-60 rounded-3xl">
        {cardItems.map((card) => (
          <Button
            key={card.value}
            label={card.label}
            onClick={() => handleSelectedCardType(card.value)}
            className={cn("p-2", {
              "bg-primary-color": cardType === card.value,
            })}
          />
        ))}
      </Box>
    </div>
  );
};

export default CardTypeSelector;
