import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const regexPatterns = {
  mobilePattern: /^09[0-9]{9}$/,
};

const rechargeScheme = z.intersection(
  z.object({
    isAmazingCharge: z.boolean().optional(),
    mobile: z.string().refine((value) => regexPatterns.mobilePattern.test(value)),
    email: z.string().email().optional(),
  }),
  z.discriminatedUnion("cardType", [
    z.object({
      cardType: z.literal("credit"),
      price: z.number().min(10000).max(900000),
    }),
    z.object({
      cardType: z.literal("permanent"),
      price: z.number().min(10000).max(2000000),
    }),
  ]),
);

export const rechargeFormResolver = zodResolver(rechargeScheme);
export type RechargeFormType = z.infer<typeof rechargeScheme>;
