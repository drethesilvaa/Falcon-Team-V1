import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function TextField({ className, label, ...rest }: TextFieldProps) {
  return (
    <label
      data-aos="fade-up"
      className={`flex flex-col gap-1 ${className || ""}`}
    >
      <b className="font-source-sans-pro text-base leading-tight font-normal">
        {label}
      </b>
      <input
        {...rest}
        type="text"
        className="placeholder:text-neutral-700 font-source-sans-pro text-base border-neutral-700 border bg-white rounded-lg max-w-none min-w-0 w-full py-2 min-h-[50px] px-3 text-black focus:border-black"
      />
    </label>
  );
}

export default TextField;
