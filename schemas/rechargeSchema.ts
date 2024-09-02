import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const regexPatterns = {
  mobilePattern: /^09[0-9]{9}$/,
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const rechargeScheme = z.object({
  cardType: z.enum(["credit", "permanent"]),
  isAmazingCharge: z.boolean().optional(),
  mobile: z.string().refine((value) => regexPatterns.mobilePattern.test(value)),
  email: z.string().email().optional().or(z.literal("")),
  price: z.string(),
  customPrice: z.coerce
    .number()
    .min(10000, { message: "حداقل مبلغ باید ۱۰.۰۰۰ ریال باشد" })
    .max(2000000, { message: "حداکثر مبلغ باید ۲.۰۰۰.۰۰۰ ریال باشد" })
    .optional(),
  bank: z.enum(["melat", "pasargad"]),
});

export const rechargeFormResolver = zodResolver(rechargeScheme);
export type RechargeFormType = z.infer<typeof rechargeScheme>;
