import { useState } from "react"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
function DescriptionInput({ onSeted }) {
  // TODO: remove color
  const [color, setColor] = useState(["#0F8A40", "success"])
  // TODO: remove length
  const [length, setLength] = useState(0)

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
    <div>
      <TextField
        fullWidth
        inputProps={{ maxLength: 512 }}
        // TODO: use description for set color
        color={color[1]}
        onChange={(e) => {
          const value = e.target.value
          value.length >= 512
            ? setColor(["#D02128", "error"])
            : setColor(["#0F8A40", "success"])
          setLength(value.length)
          onSeted(value)
        }}
        placeholder="عنوان لیبل را وارد کنید"
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
          // TODO: use description for set color

          color: color[0],
          direction: "ltr",
          fontFamily: "IRANYekanWeb",
          paddingTop: "4px",
        }}>
        {/*             // TODO: use description for get number character
         */}
        {toFarsiNumber(length)}/۵۱۲
      </Typography>
    </div>
  )
}
export default DescriptionInput
