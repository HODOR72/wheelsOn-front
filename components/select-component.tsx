import React, { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface Value {
  id: number | string;
  value: string;
}

interface SelectComponent {
  value: string;
  values: Value[];
  disabled?: boolean;
  setValue(event: any): any;
}

export const SelectComponent: FunctionComponent<SelectComponent> = ({
  value,
  values,
  disabled = false,
  setValue,
}) => {
  return (
    <div
      style={{
        position: "relative",
        padding: 2,
        height: 42,
        borderRadius: "4px",
        marginTop: 8,
        boxShadow: "-1px 2px 4px rgba(0, 0, 0, 0.17)",
        border: "0.5px solid #F1F1F1",
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(159,159,159,1) 100%)",
      }}
    >
      <TextField
        id="outlined-select-currency"
        fullWidth
        select
        disabled={disabled}
        className="select-component"
        SelectProps={{
          disableUnderline: true,
          sx: {
            borderRadius: "4px",
            paddingLeft: "0.5em",
            height: 37,
            boxShadow: "inset -1px 2px 4px rgba(0, 0, 0, 0.17)",
            background: "#F1F1F1",
          },
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        variant="standard"
        sx={{
          marginBottom: 0,
          paddingTop: 0,
        }}
      >
        {values.map((value) => (
          <MenuItem key={value.id} value={value.value}>
            {value.value}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
