import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

// Define your custom props here and extend from MuiTextFieldProps
interface CustomTextFieldProps extends Omit<MuiTextFieldProps, "variant"> {
  label: string;
  className?: string; // Explicitly add className here
}

function TextField({ label, className, ...rest }: CustomTextFieldProps) {
  return (
    <MuiTextField
      {...rest}
      label={label}
      variant="outlined"
      className={className}
      fullWidth={true}
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

export default TextField;
