import { useFormContext } from "react-hook-form";

import Box from "@/components/ui/Box";

const Invoice = () => {
  const { watch } = useFormContext();
  
return (
    <Box
      className={`max-w-80 mb-4 md:col-span-2 md:bg-black/10 flex md:border-none flex-col px-4 py-5
         rounded-md border border-primary-color/80 bg-primary-color/30 place-self-center md:place-self-start w-full justify-center`}
    >
      <h1 className="hidden md:block mb-8 text-center bg-white py-4 rounded-md font-bold">
        فاکتور نهایی
      </h1>
      <InvoiceInformation
        title="نوع سیم کارت"
        value={watch("cardType") === "credit" ? "اعتباری" : "دائمی"}
      />
      <InvoiceInformation
        title="مستقیم به شماره"
        value={watch("mobile") ? watch("mobile") : "---"}
      />
      <InvoiceInformation
        title="مبلغ شارژ (+مالیات)"
        value={
          watch("price") === "customAmount"
            ? `${watch("customPrice") ? watch("customPrice") : "---"} ریال`
            : `${watch("price")} ریال`
        }
      />
      <InvoiceInformation
        title="نوع شارژ"
        value={watch("isAmazingCharge") ? "شگفت انگیز" : "معمولی"}
      />
      <InvoiceInformation title="ایمیل" value={watch("email") ? watch("email") : "---"} />
      <InvoiceInformation
        title="نام بانک"
        value={watch("bank") ? (watch("bank") === "melat" ? "ملت" : "پاسارگاد") : "---"}
      />
    </Box>
  );
};

export default Invoice;

const InvoiceInformation = ({ title, value }: { title: string; value?: string }) => {
  return (
    <div className="flex md:flex-col md:gap-y-2 md:items-start md:px-4 w-full items-center justify-between py-1.5">
      <h6 className="text-xs md:text-base md:text-secondary-text-color">{title}</h6>
      <h6 className="text-xs font-bold md:text-base">{value}</h6>
    </div>
  );
};
