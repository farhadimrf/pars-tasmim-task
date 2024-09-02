"use client";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import AmountSection from "@/components/AmountSection";
import CardTypeSelector from "@/components/CardTypeSelector";
import Invoice from "@/components/Invoice";
import SelectBankSection from "@/components/SelectBankSection";
import Box from "@/components/ui/Box";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Switch from "@/components/ui/Switch";
import { rechargeFormResolver, RechargeFormType } from "@/schemas/rechargeSchema";

const ChargePage = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const methods = useForm<RechargeFormType>({
    defaultValues: { cardType: "credit", price: "10000" },
    resolver: rechargeFormResolver,
  });

  const onSubmit: SubmitHandler<RechargeFormType> = async (data) => {
    console.log("first", data);
  };

  const handleValidationForm = async () => {
    const formValidationResult = await methods.trigger([
      "cardType",
      "customPrice",
      "email",
      "isAmazingCharge",
      "mobile",
      "price",
    ]);
    formValidationResult ? setIsFormValid(true) : setIsFormValid(false);
  };

  const handleChangeFormData = () => {
    setIsFormValid(false);
  };

  useEffect(() => {
    if (methods.getValues("isAmazingCharge") === true) {
      methods.resetField("customPrice");
      methods.setValue("price", "50000");
    }
  }, [methods.watch("isAmazingCharge")]);

  return (
    <Box className="p-8 pb-14 my-10 shadow-lg sm:mx-6 max-w-4xl bg-white rounded-2xl">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="grid md:grid-cols-5">
          <div className="md:col-span-3 place-self-center md:place-self-start flex justify-center w-full max-w-80 flex-col md:max-w-80 md:mr-16">
            <h1 className="text-center font-bold text-lg mb-10">خرید آنلاین شارژ ایرانسل</h1>
            <CardTypeSelector disabled={isFormValid} />
            {methods.watch("cardType") === "credit" && (
              <Switch
                disabled={isFormValid}
                {...methods.register("isAmazingCharge")}
                label="شارژ شگفت انگیز"
              />
            )}
            <Input
              disabled={isFormValid}
              inputMode="numeric"
              type="number"
              containerClassName="my-4"
              {...methods.register("mobile")}
              error={methods.formState.errors.mobile !== undefined}
              label="شماره تلفن موبایل"
            />
            <AmountSection disabled={isFormValid} />
            <Input
              disabled={isFormValid}
              error={methods.formState.errors.email !== undefined}
              label="ایمیل (اختیاری)"
              containerClassName="my-4"
              {...methods.register("email")}
            />
          </div>
          <Invoice />
          <div className="md:col-span-3 max-w-80 flex flex-col place-self-center md:place-self-start w-full justify-center md:mr-16">
            {isFormValid && <SelectBankSection />}
            <Button
              onClick={isFormValid ? undefined : handleValidationForm}
              type={isFormValid ? "submit" : "button"}
              label={isFormValid ? "پرداخت و شارژ" : "انتخاب بانک و پرداخت"}
            />

            {isFormValid && (
              <Button
                onClick={handleChangeFormData}
                className="bg-white text-base text-blue-600 font-normal mt-2"
                label="انصراف"
              />
            )}
          </div>
        </form>
      </FormProvider>
    </Box>
  );
};

export default ChargePage;
