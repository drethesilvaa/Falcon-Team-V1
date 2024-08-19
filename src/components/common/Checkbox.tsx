import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
   label: string;
}

function Checkbox({className, label, ...rest}: CheckboxProps) {
   return (
      <label
         data-aos="fade-up"
         className={`flex items-center gap-2.5 ${className || ""}`}
      >
         <input {...rest} className="size-5" type="checkbox" />
         <span className="text-neutral-700 font-source-sans-pro text-base leading-tight">
            {label}
         </span>
      </label>
   );
}

export default Checkbox;
