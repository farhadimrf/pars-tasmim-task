import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const regexPatterns = {
  mobilePattern: /^09[0-9]{9}$/,
};

const rechargeScheme = z.object({
  cardType: z.enum(["credit", "permanent"]),
  isAmazingCharge: z.boolean().optional(),
  mobile: z.string().refine((value) => regexPatterns.mobilePattern.test(value)),
  email: z.string().email().optional(),
  price: z.string(),
  customPrice: z
    .number()
    .min(10000, { message: "حداقل مبلغ باید ۱۰.۰۰۰ ریال باشد" })
    .min(2000000, { message: "حداکثر مبلغ باید ۲.۰۰۰.۰۰۰ ریال باشد" })
    .optional(),
});

export const rechargeFormResolver = zodResolver(rechargeScheme);
export type RechargeFormType = z.infer<typeof rechargeScheme>;
