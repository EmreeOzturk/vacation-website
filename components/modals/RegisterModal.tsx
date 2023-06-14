"use client";
import React from "react";
import Modal from "./Modal";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { registerModalFunc } from "@/redux/modalSlice";

const RegisterModal: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.registerModal);
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
  const footerElement: React.ReactNode = (
    <div
      className="mt-5 
    flex
    flex-col
    items-center
    justify-center
    space-y-2
    w-full
    "
    >
      <button
        className="
        w-full
        flex
        items-center
        justify-center
        px-4
        py-2
        text-sm
        font-medium
        text-black
        bg-transparent
        border 
        rounded-md
        shadow-sm
        hover:bg-gray-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
      "
        type="button"
        onClick={() => {}}
      >
        Google Sign In
      </button>
    </div>
  );
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          dispatch(registerModalFunc());
        }}
        onSubmit={handleSubmit(onSubmit)}
        title="Sign Up"
        btnLabel="Sign Up Now"
        body={bodyElement}
        footer={footerElement}
      />
    </div>
  );
};

export default RegisterModal;
