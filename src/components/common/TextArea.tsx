import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ className, label, ...rest }: TextAreaProps) {
  return (
    <label
      data-aos="fade-up"
      className={`flex flex-col gap-1 ${className || ""}}`}
    >
      <b className="font-source-sans-pro text-base leading-tight font-normal">
        {label}
      </b>
      <textarea
        {...rest}
        className="placeholder:text-neutral-700 font-source-sans-pro text-base border-neutral-700 border bg-white rounded-lg max-w-none min-w-0 w-full py-2 min-h-[50px] px-3 text-black focus:border-black"
      ></textarea>
    </label>
  );
}

export default TextArea;
