import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: "#14B858",
  color: "white",
  width: "100%",
  height: "48px",
  borderRadius: "12px",
  fontFamily: "IRANYekanWeb",
});

export default function EndButtons({ title , disable }) {
  if (disable) {
    return (
      <StyledButton variant="text" sx={{
        backgroundColor: "#BCC3BF",
        cursor: "default",
        ":hover": {
        backgroundColor: "#BCC3BF"
      }
      }}>
        {title}
      </StyledButton>
    )
  }
  else return (
    <StyledButton variant="text" sx={{
      backgroundColor: "#14B858",
      ":hover": {
        backgroundColor: "#32CD32"
      }
    }}>
      {title}
    </StyledButton>
  );
}