import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function DescriptionInput({ onSeted }) {
  const [color, setColor] = useState(["#0F8A40", "success"]);
  const [length, setLength] = useState(0);
  function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  }
  return (
    <div>
      <TextField
        fullWidth
        inputProps={{ maxLength: 512 }}
        color={color[1]}
        onChange={(e) => {
          const value = e.target.value;
          value.length >= 512
            ? setColor(["#D02128", "error"])
            : setColor(["#0F8A40", "success"]);

          setLength(value.length);

          //trim value to find noSpace text length
          const trimmedValue = value.trim();
          if (trimmedValue.length > 0 && value.length <= 512) {
            onSeted(true);
          } else {
            onSeted(false);
          }
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
            fontFamily: 'IRANYekanWeb'
          }
        }}
      />
      <Typography sx={{ color: color[0], direction: 'ltr', fontFamily: 'IRANYekanWeb' , paddingTop:'4px' }}>
        {toFarsiNumber(length)}/۵۱۲
      </Typography>
    </div>
  );

}
export default DescriptionInput;
