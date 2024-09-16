import React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

interface CheckboxProps {
  label: string;
  className?: string; // Optional className prop
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({
  label,
  className,
  checked,
  onChange,
  ...rest
}: CheckboxProps) {
  return (
    <FormControlLabel
      control={<MuiCheckbox checked={checked} onChange={onChange} {...rest} />}
      label={label}
      className={className}
      sx={{
        display: "flex",
        gap: "10px",
      }}
    />
  );
}

export default Checkbox;
