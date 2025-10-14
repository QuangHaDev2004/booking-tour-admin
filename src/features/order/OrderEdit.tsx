/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { pathAdmin } from "@/config/path";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormSchema, type OrderFormInputs } from "@/types";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { FormInput } from "@/components/form/FormInput";
import { FormEditor } from "@/components/form/FormEditor";
import { FormSelect } from "@/components/form/FormSelect";
import { ButtonSubmit } from "@/components/button/ButtonSubmit";
import { ContextLink } from "@/components/common/ContextLink";
import { OrderTourList } from "./components/OrderTourList";
import { OrderSummary } from "./components/OrderSummary";
import {
  ORDER_STATUS_LIST,
  PAYMENT_METHOD_LIST,
  PAYMENT_STATUS_LIST,
} from "./constants/order";

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
    data.note = "";
    if (editorRef.current) {
      data.note = editorRef.current?.getContent();
    }

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
            isRequired
          />

          <FormInput
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            error={errors.phone}
            isRequired
          />

          <FormEditor editorRef={editorRef} id="note" label="Ghi chú" />

          <FormSelect
            id="paymentMethod"
            label="Phương thức thanh toán"
            register={register("paymentMethod")}
            error={errors.paymentMethod}
            options={PAYMENT_METHOD_LIST}
          />

          <FormSelect
            id="paymentStatus"
            label="Trạng thái thanh toán"
            register={register("paymentStatus")}
            error={errors.paymentStatus}
            options={PAYMENT_STATUS_LIST}
          />

          <FormSelect
            id="status"
            label="Trạng thái"
            register={register("status")}
            error={errors.status}
            options={ORDER_STATUS_LIST}
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

          <OrderTourList />

          <OrderSummary />

          <ButtonSubmit text="Cập nhật" />
        </form>
        <ContextLink
          text="Quay lại danh sách"
          to={`/${pathAdmin}/order/list`}
        />
      </div>
    </>
  );
};
