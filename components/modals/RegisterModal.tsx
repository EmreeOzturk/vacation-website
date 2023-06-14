"use client";
import React from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const bodyElement: React.ReactNode = <div>asd</div>;
  return (
    <div>
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Modal Title"
        body={bodyElement}
        btnLabel="Modal Button"
        onSubmit={() => {}}
      />
    </div>
  );
};

export default RegisterModal;
