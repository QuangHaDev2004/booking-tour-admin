import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên danh mục!"),
  parent: z.string().optional(),
  position: z.string().optional(),
  status: z.string().optional(),
  avatar: z.any().optional(),
  description: z.string().optional(),
});

export type CategoryFormInputs = z.infer<typeof categoryFormSchema>;

export type Option = {
  label: string;
  value: string;
};

export const tourFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên tour!"),
  category: z.string().optional(),
  position: z.string().optional(),
  status: z.string().optional(),
  avatar: z.any().optional(),
  priceAdult: z.coerce.number<number>().optional(),
  priceChildren: z.coerce.number<number>().optional(),
  priceBaby: z.coerce.number<number>().optional(),
  priceNewAdult: z.coerce.number<number>().optional(),
  priceNewChildren: z.coerce.number<number>().optional(),
  priceNewBaby: z.coerce.number<number>().optional(),
  stockAdult: z.coerce.number<number>().optional(),
  stockChildren: z.coerce.number<number>().optional(),
  stockBaby: z.coerce.number<number>().optional(),
  time: z.string().optional(),
  vehicle: z.string().optional(),
  departureDate: z.string().optional(),
  information: z.string().optional(),
  schedules: z
    .array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }),
    )
    .optional(),
});

export type TourFormInputs = z.infer<typeof tourFormSchema>;
