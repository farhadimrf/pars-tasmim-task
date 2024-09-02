import { useFormContext } from "react-hook-form";

import Box from "@/components/ui/Box";
import RadioButton from "@/components/ui/RadioButton";
import { cn } from "@/utils/cn";

type BankItemsType = {
  label: string;
  value: string;
};

const bankItems: BankItemsType[] = [
  { label: "بانک ملت", value: "melat" },
  { label: "بانک پاسارگاد", value: "pasargad" },
];

const SelectBankSection = () => {
  const { register, watch } = useFormContext();

  return (
    <Box className="bg-gray-200 text-sm flex flex-col rounded-lg p-4  mb-4">
      <h6 className="font-bold">انتخاب بانک:</h6>
      <div className="flex gap-4 py-8">
        {bankItems.map((item) => (
          <RadioButton
            key={item.value}
            label={item.label}
            {...register("bank")}
            value={item.value}
            className={cn("text-sm font-bold py-2 bg-slate-100", {
              "bg-primary-color": watch("bank") === item.value,
            })}
          />
        ))}
      </div>
    </Box>
  );
};

export default SelectBankSection;
