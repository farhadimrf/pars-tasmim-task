"use client";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import CardTypeSelector from "@/components/CardTypeSelector";
import Box from "@/components/ui/Box";
import { rechargeFormResolver, RechargeFormType } from "@/schemas/rechargeSchema";

const ChargePage = () => {
  const [cardType, setCardType] = useState<"credit" | "permanent">("credit");

  const methods = useForm<RechargeFormType>({
    defaultValues: {
      cardType,
    },
    resolver: rechargeFormResolver,
  });

  const handleSelectedCardType = (value: "credit" | "permanent") => {
    setCardType(value);
    methods.setValue("cardType", value);
  };

  console.log("s", methods.getValues("cardType"));

  return (
    <Box className="p-8 pb-14 shadow-lg sm:mx-6 max-w-4xl bg-white rounded-2xl">
      <FormProvider {...methods}>
        <form className="grid md:grid-cols-5">
          <CardTypeSelector
            onSelectedCard={handleSelectedCardType}
            cardType={cardType}
            className="md:col-span-2"
          />
        </form>
      </FormProvider>
    </Box>
  );
};

export default ChargePage;
