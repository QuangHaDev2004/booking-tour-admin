import { z } from "zod";

// Category
export const categoryFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên danh mục!"),
  parent: z.string().optional(),
  position: z.string().optional(),
  status: z.string().optional(),
  avatar: z.any().optional(),
  description: z.string().optional(),
});

export type CategoryFormInputs = z.infer<typeof categoryFormSchema>;

// Option
export type Option = {
  label: string;
  value: string;
};

// Tour
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

// Order
export const orderFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Vui lòng nhập họ tên!")
    .min(5, "Họ tên phải có ít nhất 5 ký tự!")
    .max(50, "Họ tên không được vượt quá 50 ký tự!"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại!")
    .regex(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])[0-9]{7}$/,
      "Số điện thoại không đúng định dạng!",
    ),
  note: z.string().optional(),
  createAt: z.string().optional(),
  paymentMethod: z.string().optional(),
  paymentStatus: z.string().optional(),
  status: z.string().optional(),
});

export type OrderFormInputs = z.infer<typeof orderFormSchema>;
