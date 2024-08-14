import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import styled from "@emotion/styled";
import CircleIcon from "@mui/icons-material/Circle";

const DivStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "8px",
});

const TypStyle = styled("Typography")({
  fontFamily: "IRANYekanWeb",
});

export default function StatusSelection({ onSeted }) {
  //TODO: remove use state and use Props
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSeted(value);
  };

  const statusOptions = [
    { value: "عالی", color: "#0f4d0f" },
    { value: "خوب", color: "#008000" },
    { value: "متوسط", color: "#ffd32c" },
    { value: "ضعیف", color: "#cd1c18" },
    { value: "بسیار ضعیف", color: "#950606" },
  ];

  return (
    <FormControl
      sx={{
        width: "100%",
        "& .MuiFormControlLabel-label": {
          fontFamily: "IRANYekanWeb",
          width: "100%",
        },
        "& css-dmmspl-MuiFormGroup-root": { rowGap: "8px" },
        "& .MuiFormControlLabel-root": {
          border: "1px solid #D3DED8",
          borderRadius: "15px",
          margin: "0px",
          height: "40px",
          padding: "4px 12px 4px 16px",
        },
        "& .css-dmmspl-MuiFormGroup-root": {
          rowGap: "8px",
        },
        "& .selected": {
          backgroundColor: "#E9EDEB",
          border: "solid 0.1rem #86928B !important",
        },
      }}
    >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {statusOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="default" />}
            label={
              <DivStyle>
                <CircleIcon sx={{ width: "15px", color: option.color }} />
                <TypStyle>{option.value}</TypStyle>
              </DivStyle>
            }
            labelPlacement="start"
            className={selectedValue === option.value ? "selected" : ""}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
