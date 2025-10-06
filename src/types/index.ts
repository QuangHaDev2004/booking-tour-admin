import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().nonempty("Vui lòng nhập tên danh mục!"),
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
