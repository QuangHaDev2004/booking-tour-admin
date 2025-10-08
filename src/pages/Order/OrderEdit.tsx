/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, type SubmitHandler } from "react-hook-form";
import { BackToList } from "../../components/common/BackToList";
import { ButtonSubmit } from "../../components/common/ButtonSubmit";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { pathAdmin } from "../../config/path";
import { FormInput } from "../../components/form/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormSchema, type OrderFormInputs } from "../../types";
import { FormEditor } from "../../components/form/FormEditor";
import { useRef } from "react";
import { FormSelect } from "../../components/form/FormSelect";

export const OrderEdit = () => {
  const editorRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(orderFormSchema),
  });

  const handleOrderForm: SubmitHandler<OrderFormInputs> = (data) => {
    data.note = editorRef.current?.getContent() || "";

    console.log(data);
  };

  return (
    <>
      <PageTitle title="Đơn hàng: OD000001" />
      <div className="border-four overflow-hidden rounded-[14px] border bg-white p-[30px] md:p-[50px]">
        <form
          onSubmit={handleSubmit(handleOrderForm)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]"
        >
          <FormInput
            id="fullName"
            label="Tên khách hàng"
            register={register("fullName")}
            error={errors.fullName}
          />

          <FormInput
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            error={errors.phone}
          />

          <FormEditor editorRef={editorRef} id="note" label="Ghi chú" />

          <FormSelect
            id="paymentMethod"
            label="Phương thức thanh toán"
            register={register("paymentMethod")}
            error={errors.paymentMethod}
            options={[
              { label: "pt1", value: "1" },
              { label: "pt2", value: "2" },
            ]}
          />

          <FormSelect
            id="paymentStatus"
            label="Trạng thái thanh toán"
            register={register("paymentStatus")}
            error={errors.paymentStatus}
            options={[
              { label: "tt1", value: "1" },
              { label: "tt2", value: "2" },
            ]}
          />

          <FormSelect
            id="status"
            label="Trạng thái"
            register={register("status")}
            error={errors.status}
            options={[
              { value: "active", label: "Hoạt động" },
              { value: "inactive", label: "Tạm dừng" },
            ]}
          />

          <FormInput
            id="createAt"
            label="Ngày đặt"
            type="datetime-local"
            register={register("createAt")}
            error={errors.createAt}
            readOnly
            value="2025-04-14T10:30"
          />

          <div>
            <label className="text-label mb-[10px] block text-sm font-semibold">
              Danh sách tour
            </label>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="h-[115px] w-[115px] overflow-hidden rounded-md">
                  <img
                    src="/assets/images/ha-long.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <div className="text-secondary/80 text-sm font-semibold">
                    Tour Hạ Long
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Người lớn: 3 x 1.500.000đ
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Trẻ em: 2 x 1.300.000đ
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Em bé: 2 x 1.000.000đ
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Ngày khởi hành: 20/10/2024
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Khởi hành tại: Hà Nội
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-[115px] w-[115px] overflow-hidden rounded-md">
                  <img
                    src="/assets/images/ha-long.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <div className="text-secondary/80 text-sm font-semibold">
                    Tour Hạ Long
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Người lớn: 3 x 1.500.000đ
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Trẻ em: 2 x 1.300.000đ
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Em bé: 2 x 1.000.000đ
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Ngày khởi hành: 20/10/2024
                  </div>
                  <div className="text-secondary/80 text-xs font-semibold">
                    Khởi hành tại: Hà Nội
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="text-label mb-[10px] block text-sm font-semibold">
              Thanh toán
            </label>
            <div className="flex flex-col gap-[3px] font-semibold text-sm text-secondary">
              <div className="">Tổng tiền: 10.000.000đ</div>
              <div className="">Giảm: 400.000đ</div>
              <div className="">Mã giảm: TOURMUAHE2024</div>
              <div className="">
                <span>Thanh toán: </span>
                <span className="font-bold text-[#EF3826]">9.600.000đ</span>
              </div>
            </div>
          </div>

          <ButtonSubmit text="Cập nhật" />
        </form>
        <BackToList to={`/${pathAdmin}/order/list`} />
      </div>
    </>
  );
};
