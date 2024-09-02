import { useFormContext } from "react-hook-form";

import Input from "@/components/ui/Input";
import RadioButton from "@/components/ui/RadioButton";
import { cn } from "@/utils/cn";

type AmountSectionType = {
  label: string;
  value: string;
  disabled?: boolean;
};

const AmountSection = () => {
  const { register, watch } = useFormContext();

  const disabledAmount =
    watch("isAmazingCharge") === true && watch("cardType") === "credit" && true;

  const amountItems: AmountSectionType[] = [
    {
      label: "10,000 ریال",
      value: "10000",
      disabled: disabledAmount,
    },
    { label: "20,000 ریال", value: "20000", disabled: disabledAmount },
    { label: "50,000 ریال", value: "50000" },
    { label: "100,000 ریال", value: "100000" },
    { label: "200,000 ریال", value: "200000" },
    { label: "سایر مبالغ", value: "customAmount", disabled: disabledAmount },
  ];

  return (
    <div className="flex flex-col">
      <h6 className="text-sm text-secondary-text-color">مبلغ شارژ</h6>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {amountItems.map((item) => (
          <RadioButton
            key={item.value}
            label={item.label}
            {...register("price")}
            value={item.value}
            disabled={item.disabled}
            className={cn("text-sm font-bold py-2 bg-slate-100", {
              "bg-primary-color": watch("price") === item.value && item.disabled !== true,
            })}
          />
        ))}
      </div>
      {watch("price") === "customAmount" && watch("isAmazingCharge") === false && (
        <Input
          inputMode="numeric"
          type="number"
          label="مبلغ شارژ به ریال"
          {...register("customPrice")}
          containerClassName="mt-4"
          description="حداقل ۱۰,۰۰۰ و حداکثر ۲,۰۰۰,۰۰۰ ریال
"
        />
      )}
    </div>
  );
};

export default AmountSection;
