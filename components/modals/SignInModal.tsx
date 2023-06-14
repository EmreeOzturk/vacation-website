"use client";
import React from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { loginModalFunc } from "@/redux/modalSlice";
import { RootState } from "@/redux/store";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
const SignInModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.loginModal);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  const bodyElement: React.ReactNode = (
    <div>
      <input
        type="text"
        placeholder="Name"
        id="name"
        className={`${
          errors.name ? "border-red-500" : "border-gray-300"
        } border-2 p-2 rounded-lg w-full  mb-3 block}`}
        {...register("name", { required: true })}
      />
      <input
        type="text"
        placeholder="Email"
        id="email"
        className={`${
          errors.name ? "border-red-500" : "border-gray-300"
        } border-2 p-2 rounded-lg w-full  mb-3 block}`}
        {...register("email", { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        className={`${
          errors.name ? "border-red-500" : "border-gray-300"
        } border-2 p-2 rounded-lg w-full  mb-3 block}`}
        {...register("password", { required: true })}
      />
    </div>
  );
  const footerElement: React.ReactNode = null;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        title="Sign In"
        onClose={() => dispatch(loginModalFunc())}
        body={bodyElement}
        // footer={footerElement}
        btnLabel="Sign In Now"
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default SignInModal;
