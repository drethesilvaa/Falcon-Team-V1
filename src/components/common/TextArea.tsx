import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

// Define your custom props here and extend from MuiTextFieldProps
interface TextAreaProps extends Omit<MuiTextFieldProps, "variant"> {
  label: string;
  className?: string; // Optional className prop
}

function TextArea({ className, label, ...rest }: TextAreaProps) {
  return (
    <MuiTextField
      {...rest}
      label={label}
      variant="outlined" // Optional: You can customize the variant
      multiline
      className={className} // Use className for additional styling
      slotProps={{
        inputLabel: {
          style: {},
        },
        input: {
          style: {},
        },
      }}
    />
  );
}

export default TextArea;
