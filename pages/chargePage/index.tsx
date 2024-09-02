"use client";
import { FormProvider, useForm } from "react-hook-form";

import AmountSection from "@/components/AmountSection";
import CardTypeSelector from "@/components/CardTypeSelector";
import Box from "@/components/ui/Box";
import Input from "@/components/ui/Input";
import Switch from "@/components/ui/Switch";
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
          <div className="md:col-span-3 place-self-center md:place-self-start flex justify-center w-full max-w-80 flex-col md:max-w-80 md:mr-16">
            <h1 className="text-center font-bold text-lg mb-10">خرید آنلاین شارژ ایرانسل</h1>
            <CardTypeSelector />
            {methods.watch("cardType") === "credit" && (
              <Switch {...methods.register("isAmazingCharge")} label="شارژ شگفت انگیز" />
            )}
            <Input
              inputMode="numeric"
              type="text"
              containerClassName="my-4"
              {...methods.register("mobile")}
              label="شماره تلفن موبایل"
            />
            <AmountSection />
          </div>
        </form>
      </FormProvider>
    </Box>
  );
};

export default ChargePage;
