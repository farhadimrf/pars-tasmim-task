"use client";
import { FormProvider, useForm } from "react-hook-form";

import CardTypeSelector from "@/components/CardTypeSelector";
import Box from "@/components/ui/Box";
import { rechargeFormResolver, RechargeFormType } from "@/schemas/rechargeSchema";

const ChargePage = () => {
  const methods = useForm<RechargeFormType>({
    defaultValues: { cardType: "credit" },
    resolver: rechargeFormResolver,
  });

  return (
    <Box className="p-8 pb-14 shadow-lg sm:mx-6 max-w-4xl bg-white rounded-2xl">
      <FormProvider {...methods}>
        <form className="grid md:grid-cols-5">
          <CardTypeSelector className="md:col-span-2" />
        </form>
      </FormProvider>
    </Box>
  );
};

export default ChargePage;
