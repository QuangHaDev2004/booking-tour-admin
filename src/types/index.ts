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

// Setting Website Info
export const websiteInfoSchema = z.object({
  websiteName: z.string().min(1, "Vui lòng nhập tên website!"),
  phone: z
    .string()
    .regex(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])[0-9]{7}$/,
      "Số điện thoại không đúng định dạng!",
    )
    .or(z.literal("")),
  email: z.string().email("Email không đúng định dạng!").or(z.literal("")),
  address: z.string().optional(),
  logo: z.any(),
  favicon: z.any(),
});

export type WebsiteInfoInputs = z.infer<typeof websiteInfoSchema>;

// Setting Account Admin
export const accountAdminSchema = z.object({
  fullName: z
    .string()
    .min(1, "Vui lòng nhập họ tên!")
    .min(5, "Họ tên phải có ít nhất 5 ký tự!")
    .max(50, "Họ tên không được vượt quá 50 ký tự!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại!")
    .regex(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])[0-9]{7}$/,
      "Số điện thoại không đúng định dạng!",
    ),
  role: z.string().optional(),
  positionCompany: z.string().min(1, "Vui lòng nhập chức vụ!"),
  status: z.string().optional(),
  password: z
    .string()
    .min(1, "Vui lòng nhập mật khẩu!")
    .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự!")
    .regex(/[A-Z]/, "Mật khẩu phải chứa ký tự viết hoa!")
    .regex(/[a-z]/, "Mật khẩu phải chứa ký tự viết thường!")
    .regex(/[0-9]/, "Mật khẩu phải chứa chữ số!")
    .regex(/[^a-zA-Z0-9\s]/, "Mật khẩu phải chứa ký tự đặc biệt!"),
  avatar: z.any(),
});

export type AccountAdminInputs = z.infer<typeof accountAdminSchema>;

// Setting Role
export const roleSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập nhóm quyền!"),
  description: z.string().optional(),
  permissions: z.array(z.string()).optional(),
});

export type RoleInputs = z.infer<typeof roleSchema>;

// Profile
export const profileEditSchema = z.object({
  fullName: z
    .string()
    .min(1, "Vui lòng nhập họ tên!")
    .min(5, "Họ tên phải có ít nhất 5 ký tự!")
    .max(50, "Họ tên không được vượt quá 50 ký tự!"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email!")
    .email("Email không đúng định dạng!"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại!")
    .regex(
      /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8|9]|9[0-9])[0-9]{7}$/,
      "Số điện thoại không đúng định dạng!",
    ),
  avatar: z.any(),
});

export type ProfileEditInputs = z.infer<typeof profileEditSchema>;

export const profileChangePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Vui lòng nhập mật khẩu!")
      .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự!")
      .regex(/[A-Z]/, "Mật khẩu phải chứa ký tự viết hoa!")
      .regex(/[a-z]/, "Mật khẩu phải chứa ký tự viết thường!")
      .regex(/[0-9]/, "Mật khẩu phải chứa chữ số!")
      .regex(/[^a-zA-Z0-9\s]/, "Mật khẩu phải chứa ký tự đặc biệt!"),
    confirmPassword: z.string().min(1, "Vui lòng nhập xác nhận mật khẩu!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // báo lỗi tại trường confirmPassword
    message: "Mật khẩu xác nhận không khớp!",
  });

export type ProfileChangePasswordInputs = z.infer<
  typeof profileChangePasswordSchema
>;
