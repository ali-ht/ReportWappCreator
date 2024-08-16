import { useState } from "react"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
function DescriptionInput({ setDescription, descriptionValue }) {

  //TODO: move to the helper
  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

    return n
      .toString()
      .split("")
      .map((x) => farsiDigits[x])
      .join("")
  }
  return (
    <div style={{ marginBottom: '0px' }}>
      <TextField
        fullWidth
        inputProps={{ maxLength: 512 }}
        color={descriptionValue.length >= 512
          ? "error"
          : "success"
        }
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        placeholder="توضیحات را وارد کنید"
        id="outlined-multiline-static"
        multiline
        rows={4}
        dir="rtl"
        sx={{
          borderRadius: "120px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "12px",
            borderWidth: "1px",
          },
          "& .css-1826p56-MuiInputBase-root-MuiOutlinedInput-root": {
            fontFamily: "IRANYekanWeb",
          },
        }}
      />
      <Typography
        sx={{
          color:
            () => {
              descriptionValue.length >= 512
                ? "#D02128"
                : "#0F8A40"
            }
          ,
          direction: "ltr",
          fontFamily: "IRANYekanWeb",
          paddingTop: "4px",
        }}>
        {toFarsiNumber(descriptionValue.length)}/۵۱۲
      </Typography>
    </div>
  )
}
export default DescriptionInput
