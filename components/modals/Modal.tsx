"use client";
import { ModalProps } from "@/types";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const Modal: React.FC<ModalProps> = ({
  body,
  isOpen,
  onClose,
  title,
  onSubmit,
  btnLabel,
  footer,
}) => {
  const closeFunction = () => {
    onClose();
  };

  const submitFunction = () => {
    onSubmit();
  };
  if (!isOpen) return null;
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-x-hidden
        overflow-y-auto
        bg-black
        bg-opacity-75"
    >
      <div
        className="
            relative
            my-6
            mx-auto
            
            max-w-3xl
            min-w-[500px]
            transition-all
            duration-300
            ease-in-out    
            bg-white
            shadow-lg
            rounded-lg
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500"
      >
        <div className="flex items-start  justify-center border-b  border-gray-500">
          {title && (
            <div className="p-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {title}
              </h3>
            </div>
          )}

          <div>
            <AiOutlineClose
              className="absolute top-0 right-0 m-4 text-2xl text-gray-500 cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="relative flex flex-col w-full p-6">
          <div className="flex-1">
            <div className="mt-4">
             {body}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="
                        inline-flex
                        justify-center
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        bg-indigo-600
                        border border-transparent
                        rounded-md
                        w-full
                        shadow-sm
                        hover:bg-indigo-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500"
              onClick={submitFunction}
            >
              {btnLabel}
            </button>
          </div>
          <div>{footer && <div className="mt-5">{footer}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
